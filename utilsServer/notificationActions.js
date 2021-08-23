const UserModel = require("../models/UserModel")
const NotificationModel = require("../models/NotificationModel")

const setNotificationToUnRead = async userId => {
    try {
        const user = await UserModel.findById(userId)
        
        if(!user.unreadNotification){
            user.unreadNotification = true
            await user.save()
        }

        return;
    } catch (error) {
        console.log(error);
    }
}

const newLikeNotification = async (userId, postId, userToNotifyId) => {
    try {
        const userToNotify = await NotificationModel.findOne({user:userToNotifyId})
        
        const newNotification={
            type:"newLike",
            user:userId,
            post:postId,
            date:Date.now()
        }

        await userToNotify.notifications.unshift(newNotification);
        await userToNotify.save()

        await setNotificationToUnRead(userToNotifyId)
        return;
    } catch (error) {
        console.log(error);
    }
}

const removeLikeNotification = async (userId, postId, userToNotifyId) => {
    try {
      // Here we are simply using $pull operator to remove the notification from notifications array.
      // Notice we are finding the notification inside Notifications array by adding its type, userId & postId
   
        await NotificationModel.findOneAndUpdate(
        { user: userToNotifyId },
        {
          $pull: {
            notifications: {
              type: "newLike",
              user: userId,
              post: postId
            }
          }
        }
      );
   
      return;
    } catch (error) {
      console.error(error);
    }
  };

const newCommentNotification = async (postId, commentId, userId, userToNotifyId, text) => {
    try {   
        const userToNotify = await NotificationModel.findOne({user:userToNotifyId})

        const newNotification = {
            type:"newComment",
            user:userId,
            post:postId,
            commentId,
            text,
            date:Date.now()
        }

        await userToNotify.notifications.unshift(newNotification)
        userToNotify.save()

        await setNotificationToUnRead(userToNotifyId)
   
      return;
    } catch (error) {
      console.error(error);
    }
  };

const removeCommentNotification = async (postId, commentId, userId, userToNotifyId) => {
    try {
      await NotificationModel.findOneAndUpdate(
        { user: userToNotifyId },
        {
          $pull: {
            notifications: {
              type: "newComment",
              user: userId,
              post: postId,
              commentId: commentId
            }
          }
        }
      );
   
      return;
    } catch (error) {
      console.error(error);
    }
  };

const newFollowerNotification = async (userId, userToNotifyId) => {
    try {   
        const user = await NotificationModel.findOne({user:userToNotifyId})

        const newNotification = {
            type:"newFollower",
            user:userId,
            date:Date.now()
        }

        await user.notifications.unshift(newNotification)
        user.save()

        await setNotificationToUnRead(userToNotifyId)
   
      return;
    } catch (error) {
      console.error(error);
    }
  };

const removeFollowerNotification = async (userId, userToNotifyId) => {
    try {
     await NotificationModel.findOneAndUpdate(
        { user: userToNotifyId },
        { $pull: { notifications: { type: "newFollower", user: userId } } }
      );
   
      return;
    } catch (error) {
      console.error(error);
    }
  };

module.exports={newLikeNotification, 
                removeLikeNotification, 
                newCommentNotification, 
                removeCommentNotification,
                newFollowerNotification,
                removeFollowerNotification}