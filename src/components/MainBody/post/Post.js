import { Avatar, Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import NearMeIcon from "@material-ui/icons/NearMe";

const Post = ({ title, avatarPic, userName, postImg,time }) => {
  return (
    <div className="mt-5">
      <Card>
        <CardContent>
          <div className="d-flex align-items-center mb-4">
            <Avatar src={avatarPic} />
            <h6 className="mx-3">{userName}</h6>
          </div>
          
          <p>{title}</p>
          <img style={{width:"100%",height:"500px"}} src={postImg} alt="" />
          <div className="post__actions">
            <div className="like__post">
              <ThumbUpAltIcon /> <span>Like</span>
            </div>
            <div className="comment__post">
              <ChatBubbleIcon /> <span>Comment</span>
            </div>
            <div className="share__post">
              <NearMeIcon /> <span>Share</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
