import React, {useEffect, useState} from 'react'
import {Card, Icon, Image, Divider, Segment, Button, Popup, Header, Modal, Comment} from "semantic-ui-react"
import CommentInputField from "./CommentInputField"
import Link from "next/link"
import calculateTime from "../../utils/calculateTime"
import {deleteComment} from "../../utils/postActions"

function PostComments({comment, user, setComments, postId}) {

    const [disabled, setDisabled] = useState(false)

    return (
        <>
    <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' href={`/${comment.user.username}`} src={comment.user.profilePicUrl} />
      <Comment.Content>
        <Comment.Author as='a' href={`/${comment.user.username}`} >{comment.user.name}</Comment.Author>
        <Comment.Metadata>
        {calculateTime(comment.date)}
        </Comment.Metadata>
        <Comment.Text>
        {comment.text}
        </Comment.Text>

        <Comment.Actions>
          <Comment.Action>
            {(user.role==="root"||comment.user._id===user._id) && (
              <Icon disabled={disabled} color="red" name="trash" onClick={()=>{
                deleteComment(postId, comment._id, setComments)
                setDisabled(false)
                }} />
            )}
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
        </>
    )
}

export default PostComments
