import React from 'react'
import Logo from './Components/Logo'
import SearchBar from './Components/SearchBar'
import Login from './Components/Login'
import UserOption from './Components/UserOption'
import styled from 'styled-components'
const Navbar = () => {

    return (
        <StyledNav>
            <Logo />
            <SearchBar />
            <Login />
            <UserOption />
        </StyledNav>
    )
}

const StyledNav = styled.nav`
display: flex;
/* border: 2px solid; */
height: 8vh;
padding: 5px 0;
min-width: 1100px;
min-height: 40px;
background: #fff;
`

export default Navbar