import React, {useEffect, useState} from 'react'
import {Card, Icon, Image, Divider, Segment, Button, Popup, Header, Modal, Comment} from "semantic-ui-react"
import CommentInputField from "./CommentInputField"
import Link from "next/link"
import calculateTime from "../../utils/calculateTime"

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
      </Comment.Content>
    </Comment>
  </Comment.Group>
        </>
    )
}

export default PostComments
