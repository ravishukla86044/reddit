import React, { useState } from "react";
import styled from "styled-components";
import Moon from "@material-ui/icons/Brightness2Outlined";
import InputIcon from "@material-ui/icons/Input";
import ToggleOnIcon from "@material-ui/icons/ToggleOnOutlined";
import ToggleOffIcon from "@material-ui/icons/ToggleOffOutlined";
import HelpIcon from "@material-ui/icons/HelpOutlineRounded";
import { useDispatch } from "react-redux";
import { lightMode } from "../../../../Redux/color/action";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import CommunityModal from "./CommunityModal";
const UserOption = () => {
  // States
  const [userClicked, setUserClicked] = useState(false);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const user = useSelector(state => state.auth.user);

  //theme
  const dispatch = useDispatch();
  //   Handlers
  const handleOpen = () => {
    setModalDisplay(true);
  };

  const userClickHandler = () => {
    setUserClicked(!userClicked);
  };

  const nightModeHandler = () => {
    dispatch(lightMode());
    setNightMode(!nightMode);
  };
  const bubbleHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledUser onClick={userClickHandler}>
      <img src={user.profile_url } alt="user" />
      <svg
        data-icon="chevron-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="svg-inline--fa fa-chevron-down fa-w-14 fa-2x"
      >
        <path
          fill="currentColor"
          d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
          className=""
        ></path>
      </svg>
      {userClicked && (
        <StyledModel onClick={bubbleHandler}>
          <p>VIEW OPTIONS</p>
          <li onClick={nightModeHandler}>
            <Moon /> Night Mode {nightMode ? <ToggleOffIcon /> : <ToggleOnIcon />}
          </li>
          <p>MORE STUFF</p>
          <li>
            <HelpIcon /> Coin
          </li>
          <li>
            <HelpIcon /> Premium
          </li>
          <li onClick={handleOpen}>
            <HelpIcon /> Create Community
          </li>
          <li>
            <HelpIcon /> Powerups
          </li>
          <li>
            <HelpIcon /> Talks
          </li>
          <li>
            <HelpIcon />
            Help Center
          </li>
          <div className="line"></div>
          <li>
            <InputIcon /> Log In/ Sign Up
          </li>
        </StyledModel>
      )}
      <CommunityModal modalDisplay={modalDisplay} setModalDisplay={setModalDisplay }/>
    </StyledUser>
  );
};
const StyledUser = styled.div`
  width: 7%;
  height: 90%;
  margin: auto 1%;
  /* border: solid #333; */
  cursor: pointer;
  &>img{
    width:40%;
    border-radius: 5px;
  }
  & > svg {
    padding: 12%;
    /* border: solid; */
    width: 60%;
    height: 100%;
    display: inline-block;
    color: #878a8c;
  }
  & > svg + svg {
    width: 40%;
    padding: 7%;
    color: #333;
  }
`;
const StyledModel = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 45px;
  background: #fff;
  list-style: none;
  width: 180px;
  padding: 0.7rem;
  border-radius: 0 0 0 1rem;
  p {
    font-size: 70%;
    color: #878a8c;
    font-weight: 600;
  }
  li {
    font-size: 90%;
    padding: 0.3rem 0.2rem;
    display: flex;
    align-items: center;
    & > svg {
      width: 20%;
      height: 100%;
      color: #1c1c1c;
      padding: 0.2rem;
      margin: auto 1%;
    }
    &:hover {
      background: #0079d3;
      color: #fff;
      & > svg {
        color: #fff;
      }
    }
  }
  .line {
    width: 90%;
    height: 1px;
    background: #dae0e6;
    margin: auto;
  }
`;

export default UserOption;
