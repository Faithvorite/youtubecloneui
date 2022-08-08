import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MicIcon from '@mui/icons-material/Mic';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 45px;
  color: white;
  width: 100%;
  padding: 5px 0px;
  
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const Search = styled.div`
color: ${({ theme }) => theme.text};
cursor: pointer;
  width: 45%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (max-width: 750px) {
    display: ${props => props.isSearchOpen? "flex" : "none"};
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text};

`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 40px;
  height: 35px;
  background-color: transparent;
  border: 1px solid #047dd4;
  color: #047dd4;
  border-radius: 3px;
  font-weight: 700;
 
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 750px) {
    display:${props => props.isSearchOpen? "none" : "flex"};
`;
const SearchButton = styled.div`
color: ${({ theme }) => theme.text};
cursor: pointer;
display: none;
@media (max-width: 750px) {
display:${props => props.isSearchOpen? "none" : "flex"};

`
const Toggles = styled.div`
position: relative;
display: flex;
@media (max-width: 750px) {
  display:${props => props.isSearchOpen? "none" : "flex"};`

const ToggleOff = styled.div`
position: absolute;
display:${props => props.darkMode? "none" : "flex"};
`;

const ToggleOn = styled.div`
opacity:${props => props.darkMode? "100%" : "0%"};`;

const Navbar = ({darkMode, setDarkMode}) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <SearchButton isSearchOpen={isSearchOpen}>
      <SearchOutlinedIcon  onClick={()=>{setSearchOpen(!isSearchOpen)}}/>
        </SearchButton>
        <Search isSearchOpen={isSearchOpen}>
          <Input placeholder="Search" />
          <SearchOutlinedIcon onClick={()=>{setSearchOpen(!isSearchOpen)}}/>
        </Search>
        <MicIcon style={{padding: "10px", cursor: "pointer"}}/>
        <Toggles isSearchOpen={isSearchOpen}>
          <ToggleOn darkMode={darkMode}>
        <ToggleOffOutlinedIcon style={{ cursor: "pointer"}} onClick={()=> {setDarkMode(!darkMode)}}/>
          </ToggleOn>
          <ToggleOff darkMode={darkMode}>
        <ToggleOnOutlinedIcon style={{ cursor: "pointer"}} onClick={()=> {setDarkMode(!darkMode)}}/>
          </ToggleOff>
        </Toggles>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button isSearchOpen={isSearchOpen}>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;