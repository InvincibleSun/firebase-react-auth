import React, {useState} from "react";
import { useNavigate } from "react-router";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { firebaseAuth } from "../firebase-config";

import {Container} from "../styles/Container.styled"
import {Button} from "../styles/Button.styled"

import styled from "styled-components";


export default function CreatePost(){
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();


  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
        title, 
        postText, 
        author: {
          name: firebaseAuth.currentUser.displayName, 
          id: firebaseAuth.currentUser.uid
        }
     });
     navigate("/"); 
  };

  return(
    <StyledPost>
      <Container height="30rem">
          <h1>Create New Post</h1>
          <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)}/>        
          <textarea type="text" placeholder="Post..." value={postText} onChange={(e) => setPostText(e.target.value)}/>
        <Button onClick={createPost}>Submit Post</Button> 
      </Container>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  h1{
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0px 0 20px;
  }
  input, textarea{
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    padding: 9px;
    margin-bottom: 20px;
    width: 20rem;
  }
  textarea{
    height: 15rem;
  }

`