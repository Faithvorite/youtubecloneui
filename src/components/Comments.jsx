import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import SortIcon from '@mui/icons-material/Sort';
const Container = styled.div`
padding: 20px;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  font-size: 15px;
`;

const Info = styled.div`
display:flex;
gap: 30px;
padding-bottom: 30px;
align-items: center;
color:  ${({ theme }) => theme.text};
`
const Count = styled.div``
const Sort = styled.div`
cursor: pointer;
align-items: center;
display:flex;
gap: 15px;
font-size: 14px;
font-weight: 500;
`

const Comments = () => {
  return (
    <Container>
      <Info>
        <Count>2,006 Comments</Count>
        <Sort>
          <SortIcon/>
          SORT BY
        </Sort>
      </Info>
      <NewComment>
        <Avatar src="https://i.stack.imgur.com/dr5qp.jpg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;