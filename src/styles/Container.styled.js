import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "35rem"};
  background-color: #f4ede5;
  border-radius: 1rem;
  color: #de8d02;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
`;
