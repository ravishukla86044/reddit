import React, { useState } from "react";
import Logo from "./Components/Logo";
import SearchBar from "./Components/SearchBar";
import Login from "./Components/Login";
import UserOption from "./Components/UserOption";
import styled from "styled-components";
import { Chat } from "../../Chat/Chat";

const Navbar = () => {
  const [chat, setChat] = useState(false);

  return (
    <>
      {chat && <Chat setChat={setChat} />}
      <StyledNav>
        <Logo />
        <SearchBar />
        <Login setChat={setChat} />
        <UserOption />
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  display: flex;
  /* border: 2px solid; */
  height: 8vh;
  padding: 5px 0;
  min-width: 1100px;
  min-height: 40px;
  background: #fff;
`;

export default Navbar;
