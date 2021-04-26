import React, { useEffect, useState } from "react";
import StoryReal from "./StoryReal/StoryReal";
import "./Mainbody.css";
import { Avatar, Button, Card, CardContent } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import Videocam from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Post from "./post/Post";
import db from "../firebase";
import { useSelector } from "react-redux";
import firebase from 'firebase'

const MainBody = () => {
    const [post,setPost]=useState('')
    const [url,setUrl]=useState('')
    const [postData,setPostData]=useState([])

    const {user} = useSelector(state => state.auth)
    console.log(user)

    const postHandler=(e)=>{
        e.preventDefault()  

        db.collection('posts').add({
            title: post,
            profilePic: user.photo ,
            image: url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            

        })
        .then(result=>{
          console.log(result)
        })
        .catch(err=>{
          console.log(err)
        })

        setUrl('')
        setPost('')
    }

    useEffect(()=>{

        db.collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot(snap=>{
            setPostData(snap.docs.map(doc=>({
                id: doc.id, 
                data: doc.data()
            })))
        })

    },[])
    

    
  return (
    <div className="mainBody">
      <div className="storyReal__style">
        <StoryReal
          title="Hello World"
          image="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          avatarPic="https://static.toiimg.com/photo/76729750.cms"
        />
        <StoryReal
          title="Hello World"
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          avatarPic="https://static.toiimg.com/photo/76729750.cms"
        />
        <StoryReal
          title="Hello World"
          image="https://images.unsplash.com/photo-1619360189152-eda205574fb5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          avatarPic="https://static.toiimg.com/photo/76729750.cms"
        />
        <StoryReal
          title="Hello World"
          image="https://images.unsplash.com/photo-1587554801471-37976a256db0?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          avatarPic="https://static.toiimg.com/photo/76729750.cms"
        />
        <StoryReal
          title="Hello World"
          image="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          avatarPic="https://static.toiimg.com/photo/76729750.cms"
        />
      </div>
      <div className="massageBody">
        <Card>
          <CardContent>
            <div className="massage__top">
              <Avatar src={user.photo} />
              <form onSubmit={postHandler}>
                <input value={post} onChange={(e)=>{setPost(e.target.value)}} className="post__input" placeholder="Post here" type="text" />
                <input value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="Image Url (Optional)" type="text" />
                <Button style={{display:"none"}} type="submit">Hide</Button>
              </form>
            </div>
            <div className="massage__bottom">
              <div className="live__video">
                <Videocam />
                <h6>Live Video</h6>
              </div>
              <div className="photos">
                <PhotoLibraryIcon />
                <h6>Photos/Videos</h6>
              </div>
              <div className="felling__activities">
                <InsertEmoticonIcon />
                <h6>Felling/Activities</h6>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="post">
            {
                postData && postData.map(val=>{
                  console.log(val)
                    return(
                        <Post 
                        key={val.id}
                        title={val.data.title}
                        avatarPic={val.data.profilePic}
                        userName={val.data.name}
                        postImg={val.data.image}
                        
                        />
                    )
                })
            }
           
            
        </div>
      </div>
    </div>
  );
};

export default MainBody;
