import { onAuthStateChanged, signOut } from "firebase/auth";
import {firebaseAuth, db} from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Post from "../components/Post"

import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";
import { Title } from "../styles/Title.styled"

import styled from "styled-components";

export default function Home(){
  const [user, setUser] = useState(undefined);
  const [postList, setPostList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) setUser(currentUser);
        else navigate("/auth/login");
    })
  }, [navigate])

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }; 
    getPosts();
  }, [postsCollectionRef]);

  const deletePost = async(id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return(
    <div>
        <Welcome>
          <Flex>
            <Title>SocialPost</Title>
            <Link to="/createpost">
              <Button bg="#f4ede5" color="#ec966b" bgh="#fff">Create New Post</Button>
            </Link>
            <Container height="10rem" width="27rem">
              <Flex>
                  <h2>Welcome {user && localStorage.getItem("name")}</h2>
                  <img src={localStorage.getItem("profilePic")} alt="profilePic" />
              </Flex>
              <Button onClick={() => signOut(firebaseAuth)}>Log Out</Button>
              {/* <h3>{user?.email}</h3> */}
            </Container>
          </Flex>
        </Welcome>
        
      
         {postList.map(post => {
           return <Post key={post.id} 
                        title={post.title} 
                        text={post.postText} 
                        author={post.author.name} 
                        authorId={post.author.id} 
                        userId={firebaseAuth.currentUser.uid} 
                        deletePost={() => deletePost(post.id)}
                  />
         })} 
         
     
    </div>  
  );
};



const Welcome = styled.header`
    margin: 20px 0;
    h2 {
      font-size: 1.7rem;
      margin: 20px;
      @media(max-width: 600px){ 
        font-size: 1.3rem;
      }
      @media(max-width: 440px){ 
        font-size: 1rem;
      }
    }
    h3{
      font-size: 1.7rem;
      margin-bottom: 20px;
    }
    img{
      display: block;
      border-radius: 50%;
    }
`;
