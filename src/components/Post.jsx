import React from "react";
// import mountains from "../img/mountains.jpg"

import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";

import styled from "styled-components";


export default function Post(props){
  return(
    <Article>
      <Container width="50%">
        <div className="title-flex">
          <h2>{props.title || "Title"}</h2>
          {props.authorId === props.userId && <Button onClick={props.deletePost}>&#128465;</Button>}
        </div>
        
        <Flex>
          {/* <img src={mountains} alt="mountains"/> */}
          <p>{props.text || "  hat kind of article.Let's go!"}</p>
          <h3>{props.author || "Vitiunina"}</h3>
        </Flex>
      </Container>
    </Article>
  )
}


const Article = styled.article`
  padding: 0.5rem;
    .title-flex{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      h2{
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-weight: 700;
        font-size: 1.2rem;
        flex: 50%;
        text-shadow: 1px 1px #bbb;
      }
    }
    
    /* img{
        display: block;
        width: 15rem;
        height: 15rem;
        border-radius: 10px;
        margin-left: 40px;
      } */
    
    p{
      margin: 0 20px;
      padding: 20px;
      text-align: justify;
      overflow-wrap: break-word;
      overflow: hidden;
      overflow-y: auto;
      height: auto;
      max-height: 40rem;
      border-radius: 5px;
      border: 1px dashed #bbb;
      width: 70%;
      /* flex: 0 1 auto; */
    }
    h3{
      align-self: flex-end;
    }
    
`


