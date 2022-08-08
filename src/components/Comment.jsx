import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 15px;
`;

const Button = styled.div`
padding: 10px 20px;
height: 2px;
width: 5%;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const View = styled.div`
display: flex;
color: #047dd4;
font-size: 15px;
font-weight: 500;
align-items: center;
gap: 10px;

`

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://i.stack.imgur.com/dr5qp.jpg" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      <Buttons>
            <Button>
              <ThumbUpOutlinedIcon fontSize="inherit" /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon fontSize="inherit" />
            </Button>
            <Button>
            REPLY
            </Button>
          </Buttons>
          <View>
           <ArrowDropDownIcon/> View 30 replies

          </View>
      </Details>
    </Container>
  );
};

export default Comment;