import styled from "styled-components";
import { useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineCamera, AiOutlineGif, AiOutlineCaretRight } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { AllChatMember } from "./AllChatMember";
import { Messages } from "./Messages";

import TextField from "@mui/material/TextField";

function Chat() {
  const { isLight } = useSelector((state) => state.color);
  const { user } = useSelector((state) => state.auth);
  const scrollRef = useRef();
  //console.log(user);

  // getting all conversation of a user
  const [chatroom, setChatroom] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    getConversation();
  }, []);

  async function getConversation() {
    let res = await axios.get(`http://localhost:3001/chatroom/${user._id}`);
    setChatroom(res.data.chatroom);
    console.log(res, "chatroom");
  }
  async function getMsg() {
    try {
      const res = await axios.get(`http://localhost:3001/msg/${currentChat._id}`);
      setMessages(res.data.allMsg);
      console.log(res, "msg");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMsg();
  }, [currentChat]);

  // const socket = io("http://localhost:3001");
  // socket.on("message", (data) => {
  //   console.log(data, "mssg");
  // });
  // socket.on("output", (data) => {
  //   console.log(data, "output");
  // });
  const handleSendMessage = async () => {
    if (newMessage === "") {
      return;
    }
    const payload = {
      senderId: user._id,
      text: newMessage,
      chatRoomId: currentChat._id,
    };

    try {
      const res = await axios.post(`http://localhost:3001/msg`, payload);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (e) {
      console.log({ error: e });
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ChatDiv isLight={isLight}>
      <div className="rootDiv">
        <div className="leftPart">
          <div className="leftHeader">
            <div>Chat</div>
            <div>
              <div className="join">
                <HiOutlinePlus />
              </div>
            </div>
          </div>
          <div>
            {chatroom.map((a) => (
              <div
                onClick={() => {
                  setCurrentChat(a);
                }}
              >
                <AllChatMember data={a} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="rightPart">
          <div className="rightHeader">
            <div className="name">Name</div>
            <div className="optionIcons">
              <div>
                <IoSettingsOutline />
              </div>
              <div>
                <RiShareBoxLine />
              </div>
              <div>
                <BsChevronDown />
              </div>
              <div>
                <VscChromeClose />
              </div>
            </div>
          </div>
          <div className="chatFeed">
            {!currentChat ? (
              <div className="nochat">Select a user to start a chat</div>
            ) : (
              messages ||
              [].map((m) => (
                <div ref={scrollRef}>
                  <Messages data={m} currentUser={m.senderId === user._id} />
                </div>
              ))
            )}
          </div>
          <div className="input lastIcons">
            <div className="optionIcons">
              <div>
                <AiOutlineCamera />
              </div>
            </div>
            <div className="inputField">
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
              />
            </div>
            <div className="optionIcons">
              <div>
                <AiOutlineGif />
              </div>
              <div>
                <GrEmoji />
              </div>
              <div onClick={handleSendMessage} style={{ marginLeft: "20px" }}>
                <AiOutlineCaretRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChatDiv>
  );
}

const ChatDiv = styled.div`
  /* display: none; */
  bottom: 10px;
  right: 30px;
  border-radius: 1em 1em 0 0;
  box-shadow: 0 0.125em 0.75em 0.125em rgba(20, 120, 120, 0.11);
  top: auto;
  position: fixed;
  overflow: hidden;
  background: none;
  z-index: 51;
  border: 1px solid #edeff1;
  border-bottom: none;
  .rootDiv {
    width: 530px;
    height: 420px;
    background-color: ${(props) => (props.isLight ? "#FFFFFF" : "#1A1A1B")};
    display: flex;
  }

  .leftPart {
    height: 100%;
    -ms-flex: 1 0 30%;
    flex: 1 0 30%;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    border-right: 1px solid #edeff1;
    background-color: rgba(179, 179, 179, 0.1);
    box-sizing: border-box;

    .leftHeader {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      padding: 0 0.3em 0 1em;
      min-height: 3.07em;
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: transparent;
      background-color: #ffffff;
      color: "#1c1c1c";
    }
    .leftHeader > div:nth-child(1) {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
    .leftHeader > div:nth-child(2) {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }

    .join {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => (props.isLight ? "#0079d3" : "#d7dadc")};
      color: ${(props) => (props.isLight ? "#ffffff" : "#1a1a1b")};
      fill: ${(props) => (props.isLight ? "#ffffff" : "#1a1a1b")};
      font-size: 14px;
      font-weight: 700;
      letter-spacing: unset;
      line-height: 16px;
      text-transform: unset;
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .rightPart {
    height: 100%;
    flex: 2 1 70%;
    position: relative;
    display: flex;
    flex-direction: column;

    .rightHeader {
      padding: 0 1em;
      min-height: 2.625em;
      display: flex;
      position: relative;
      align-items: center;
      transition: all 0.3s;
      justify-content: space-between;
      border-bottom: 1px solid #edeff1;
    }
    .name {
      flex: 1 1 auto;
      overflow: hidden;

      display: flex;

      align-items: center;
    }
    .optionIcons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .optionIcons > div {
      padding: 0;
      width: 16px;
      height: 16px;
      line-height: 16px;
      box-sizing: content-box;
      margin-left: 16px;
      cursor: pointer;
    }
    .optionIcons svg {
      fill: #878a8c;
      color: #878a8c;
      font-size: 16px;
    }
    .inputField {
      flex-grow: 1;
    }
    .input {
      width: 100%;
      box-sizing: border-box;
      flex-direction: row;
      display: flex;
      align-items: flex-end;
      margin-bottom: 12px;
      padding: 0px 16px 10px 5px;
    }
    .lastIcons svg {
      font-size: 25px !important;
    }
    .chatFeed {
      margin-bottom: 20px;
      flex-grow: 1;
    }
  }
`;
export { Chat };
