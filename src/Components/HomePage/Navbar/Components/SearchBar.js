import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    return (
        <StyledSearch>
            <svg  focusable="false"  data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z" class=""></path></svg>
            <input type="search" placeholder='Seach Reddit' />
        </StyledSearch>
    )
}

const StyledSearch = styled.div`
background: #F6F7F8;
width: 51%;
margin: auto 4%;
height: 6vh;
border-radius: .4rem;
display: flex;
padding: 0 .5rem;
border: 1px solid transparent;
& svg{
  width: 5%;
  /* border: solid red; */
  height: 100%;
  color: #878A8C;
  display: block;
  padding: .5%;
}
& input {
    width: 100%;
    color: #1C1C1C;
    background: transparent;
    height: 100%;
    padding-left: 1rem;
    outline: none;
    border: none;
    font-size: 100%;
   }
&:hover{
  border: 1.2px solid #0079d3;
}
`


export default SearchBar