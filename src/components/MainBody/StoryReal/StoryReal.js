import { Avatar } from '@material-ui/core';
import React from 'react';
import './StoryReal.css'

const StoryReal = ({title,image,avatarPic}) => {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="storyReal">
            <Avatar src={avatarPic}/>
            <h6>{title}</h6>
        </div>
    );
};

export default StoryReal;