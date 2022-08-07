import React from "react";
import styled from "styled-components";
import NewTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import {Squash as Hamburger} from 'hamburger-react'
import { useState } from "react";

const Container = styled.div`
position: relative;
  background-color: none;
  height: 1px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  left: 0;
  width: 30vw;
  z-index: 99999999999999;
  
  
`;
const Wrapper = styled.div`
position: absolute;
background-color: ${({ theme }) => theme.bgLighter};
z-index: 99999999;
position: absolute;
height: 100vh;
padding-top: 50px !important;
padding: 20px;
  height: 100vh;
  width: 250px;
  position: sticky;
  transition: all .5s ease-in-out;
  transform: ${props => props.isOpen ? "translateX(0%)" : "translateX(-100%)" }
`;


const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Logo = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  margin-bottom: 25px;
  top: 10px;
  padding-top: 20px;
`;

const Img = styled.img`
  height: 20px;
`;

const HamburgerItem = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  width: 200px;
  height: 50px;
  z-index: 999999999999999;
 
`;
const Menu = ({ darkMode, setDarkMode }) => {
    const [isOpen, setOpen] = useState(false);
  return (
        <Container  >
      <HamburgerItem>
      <Hamburger className="hamburger-react" toggled={isOpen} toggle={setOpen} size={20} />
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
          <Logo>
            <Img src={NewTube} />
            NewTube
          </Logo>
        </Link>
        </HamburgerItem>
        
      <Wrapper isOpen={isOpen}>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF NEWTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;