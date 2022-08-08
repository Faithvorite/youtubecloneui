import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";
import Profile from "../img/profile.jpg"
const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: ${({ theme }) => theme.bg};
  @media (max-width: 900px) {
    flex-direction: column;
  }
  
`;

const Content = styled.div`
  flex: 4;
`;
const VideoWrapper = styled.div`
height: 70vh;
padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
padding: 5px 0px;
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
padding: 10px 20px;
width: 5%;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 0px;
  border: .5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
  padding: 20px;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;
const Channel = styled.div`
margin-left: 20px;
width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: .5px solid ${({ theme }) => theme.soft};
  padding: 0px 5px;
  
`;

const ChannelInfo = styled.div`
padding: 5px 20px;
  display: flex;
  gap: 20px;
  
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
color:  ${({ theme }) => theme.text};
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const DescriptionBox = styled.div`
padding: 0px 20px;`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eNUpTV9BGac"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <DescriptionBox>

        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
              </Details>
          <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
              </DescriptionBox>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        
       
        {/* <Hr /> */}
        <Channel>
          <ChannelInfo>
            <Image src={Profile} />
            <ChannelDetail>
              <ChannelName>F N</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        {/* <Hr /> */}
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;