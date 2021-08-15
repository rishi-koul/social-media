const moongoose = require('mongoose')
const Schema = moongoose.Schema

const followerSchema = new Schema({
    user:{type:Schema.Types.ObjectId, ref:"User"},
    followers:[{
        user:{type:Schema.Types.ObjectId, ref:"User"}
    }],
    following:[{
        user:{type:Schema.Types.ObjectId, ref:"User"}
    }]
}, {timestamps:true} );

module.exports=mongoose.model('Follower', followerSchema);