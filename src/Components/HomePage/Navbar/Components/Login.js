import React from 'react'
import styled from 'styled-components'
import {FiMail} from 'react-icons/fi'
import {VscDeviceCameraVideo} from 'react-icons/vsc'
import {ImCoinDollar} from 'react-icons/im'
import {CgArrowTopRightO} from 'react-icons/cg'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {IoIosTrendingUp} from 'react-icons/io'

const Login = () => {
    return (
        <StyleLogin>
            {/* <button>Log In</button>
            <button>Sign Up</button> */}
            <CgArrowTopRightO/>
            <VscDeviceCameraVideo/>
            <AiOutlineMessage/>
            <FiMail/>
            <AiOutlinePlus/>
            <span><ImCoinDollar/>Get Coins</span>
            
        </StyleLogin>
    )
}
const StyleLogin = styled.div`
 /* border: 2px solid skyblue; */
 height: 90%;
 width: 22%;
 margin: auto 0;
 margin-right: 1%;
 display: flex;
 justify-content: space-between;
 align-items: center;
  &>button{
      height: 100%;
      font-weight: bold;
      /* border: 1px solid #0079D3; */
      border-radius: 1rem;
      padding: 0 14%;
      background: #fff;
      color: #0079D3;
      cursor: pointer;
  }
  &>button+button{
    color: #fff;
    background: #0079D3;
  }
  &> svg{
      font-size: 140%;
      color: #1A1A1B;
  }
  &>span{
      display: flex;
      font-size:12px;
      align-items: center;
      border: solid 1px #DDBD37;
      border-radius:20px;
      padding: 4px;
      &>svg{
          margin-right: 4px;
          font-size:20px;
      }
  }
  
`


export default Login
