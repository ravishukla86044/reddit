import React, { useState } from "react";
import styled from "styled-components";
import Moon from "@material-ui/icons/Brightness2Outlined";
import InputIcon from "@material-ui/icons/Input";
import ToggleOnIcon from "@material-ui/icons/ToggleOnOutlined";
import ToggleOffIcon from "@material-ui/icons/ToggleOffOutlined";
import HelpIcon from "@material-ui/icons/HelpOutlineRounded";
import { useDispatch } from "react-redux";
import { lightMode } from "../../../../Redux/color/action";

const UserOption = () => {
  // States

  const [userClicked, setUserClicked] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  //theme
  const dispatch = useDispatch();
  //   Handlers
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
      <svg
        data-icon="user"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="svg-inline--fa fa-user fa-w-14 fa-7x"
      >
        <path
          fill="currentColor"
          d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
          class=""
        ></path>
      </svg>
      <svg
        data-icon="chevron-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="svg-inline--fa fa-chevron-down fa-w-14 fa-2x"
      >
        <path
          fill="currentColor"
          d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
          class=""
        ></path>
      </svg>
      {userClicked && (
        <StyledModel onClick={bubbleHandler}>
          <p>VIEW OPTIONS</p>
          <li onClick={nightModeHandler}>
            {" "}
            <Moon /> Night Mode {nightMode ? <ToggleOffIcon /> : <ToggleOnIcon />}
          </li>
          <p>MORE STUFF</p>
          <li>
            {" "}
            <HelpIcon /> Coin
          </li>
          <li>
            {" "}
            <HelpIcon /> Premium
          </li>
          <li>
            {" "}
            <HelpIcon /> Powerups
          </li>
          <li>
            {" "}
            <HelpIcon /> Talks
          </li>
          <li>
            {" "}
            <HelpIcon />
            Help Center
          </li>
          <div className="line"></div>
          <li>
            {" "}
            <InputIcon /> Log In/ Sign Up
          </li>
        </StyledModel>
      )}
    </StyledUser>
  );
};
const StyledUser = styled.div`
  width: 5%;
  height: 90%;
  margin: auto 1%;
  /* border: solid #333; */
  cursor: pointer;
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
