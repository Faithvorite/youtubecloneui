import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 25px;
  align-items: center;
  
`;
const Content = styled.div`
margin-top: 60px;
background-color: ${({ theme }) => theme.bg};
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 15px 25px;
align-items: center;
gap: 20px;
`;
const Tags =styled.div`
width: 100vw;
position: fixed;
top: 50px;
background-color: ${({ theme }) => theme.bgLighter};
`
const Bubbles = styled.div`

display:flex;
padding: 15px 0px 15px 30px;
gap: 10px;
`
const Bubble = styled.div`
font-size: 14px;
color:  ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.softer};
border: 1px solid  ${({ theme }) => theme.soft};
padding: 7px 15px;
border-radius: 25px;
cursor: pointer;
&:hover{
  background-color: ${({ theme }) => theme.soft};
}
`
const BubbleActive = styled.div`
cursor: pointer;
color: ${({ theme }) => theme.bg};
font-size: 14px;
background-color: ${({ theme }) => theme.text};
border: 1px solid  ${({ theme }) => theme.text};
padding: 7px 15px;
border-radius: 25px;
`
const Bar = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Hr = styled.hr`
left: 0;
position:absolute;
width: 100vw;
  border: 0.25px solid ${({ theme }) => theme.softer};
`;

const Ender = styled.div`
color: ${({ theme }) => theme.text};

position: fixed;
padding: 10px 30px;
right: 0;
background-image: linear-gradient(to right, rgba(0,0,0,0), ${({ theme }) => theme.bgLighter} 30%);
`
const Home = () => {
  return (
    <Container>
      <Tags>
      <Hr />
      <Bar>

        <Bubbles>
      <BubbleActive>All</BubbleActive>
      <Bubble>Gaming</Bubble>
      <Bubble>Live</Bubble>
      <Bubble>Comedy</Bubble>
      <Bubble>Trailers</Bubble>
      <Bubble>Trailers</Bubble>
      <Bubble>Trailers</Bubble>
      <Bubble>History</Bubble>
      <Bubble>History</Bubble>
      <Bubble>History</Bubble>
      <Bubble>History</Bubble>
      <Bubble>History</Bubble>
      <Bubble>Trailers</Bubble>
      <Bubble>Trailers</Bubble>
      
        </Bubbles>
        <Ender>
        <ArrowForwardIosOutlinedIcon />
      </Ender>
      </Bar>
  <Hr/>
      </Tags>
      <Content>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </Content>
    </Container>
  );
};

export default Home;