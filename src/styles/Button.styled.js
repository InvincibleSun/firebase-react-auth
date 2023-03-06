import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#ec966b"};
  border: none;
  color: ${({ color }) => color || "#fff"};
  padding: 0.6rem 1.5rem;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ bgh }) => bgh || "#ffa000"};
  }
`;
