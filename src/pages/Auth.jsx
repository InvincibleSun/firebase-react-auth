import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, signInWithGoogle } from "../firebase-config";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

import { Title } from "../styles/Title.styled"
import { Container } from "../styles/Container.styled"

import styled from "styled-components";


export default function Auth() {
  const { action } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
     onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) navigate("/")
     })
  }, [navigate])
  

  return(
    <Section>
      <Title>SocialPost</Title>
      <Container height="20rem" width="19rem">
          {action === "login" ? <h2>Log In</h2> :  <h2>Sign Up</h2>}

          <button type="button" onClick={signInWithGoogle}>
            <i className="fa-brands fa-google"></i> 
            Log in with google
          </button>

          {action === 'login' ? 
            <p>
               Don`t have an account? <Link to="/auth/signup">Sign Up</Link>
            </p>  : 
            <p>
               Already have an account? <Link to="/auth/login">Log In</Link>
            </p>
          }
      </Container>
      
    </Section>
  )
}




const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 0 0.5rem 1.3rem;
    font-size: 1.7rem;
    @media(max-width: 600px){ 
        font-size: 1.3rem;
    }
    @media(max-width: 440px){ 
        font-size: 1rem;
    }
  }
    
    button {
      width: 14.5rem;
      padding: 0.5rem;
      border: none;
      border-radius: 3px;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
      color: #757575;
      background-color: white;
      font-size: 1rem;
      font-weight: 500;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      &:hover {
         box-shadow: 
            0 -1px 0 rgba(0, 0, 0, .04), 
            0 2px 4px rgba(0, 0, 0, .25);
         cursor: pointer;
      }
      &:active {
         background-color: #eeeeee;
      }
      &:focus {
         outline: none;
         box-shadow: 
            0 -1px 0 rgba(0, 0, 0, .04),
            0 2px 4px rgba(0, 0, 0, .25),
            0 0 0 3px #c8dafc;
      }
      i{
         margin-right: 10px;
         color: #5f4391;
      }
    }
    p{
      margin: 1rem;
    }
    a {
        color: #5f4391;
        text-decoration: none;
    }
`;