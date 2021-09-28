import { FeedItem } from "./FeedItem";
import { CreatePost } from "./CreatePost";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IoFlame, IoReorderTwo, IoReorderFourSharp } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { CgArrowUpR } from "react-icons/cg";
import { BsThreeDots, BsLayoutThreeColumns } from "react-icons/bs";
import { RiArrowDownSLine, RiLayoutRowLine } from "react-icons/ri";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Con = styled.div`
  width: 640px;
  box-sizing: border-box;

  .menu > div:nth-child(1) {
    text-align: left;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #1a1a1b;
  }

  .menuItem {
    box-sizing: border-box;
    background-color: ${(props) => (props.isLight ? "#FFFFFF" : "#1A1A1B")};
    border-radius: 4px;
    border: 1px solid ${(props) => (props.isLight ? "#ccc" : "#343536")};
    display: flex;
    width: 640px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
    padding: 10px 12px;

    .firstIcon {
      color: rgb(2, 114, 196) !important;
    }
    .firstIcon svg {
      fill: rgb(2, 114, 196) !important;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      word-break: normal;
      color: #818384;
      font-weight: 600;
      font-size: 16px;
      border-radius: 22px;
      cursor: pointer;
      margin-right: 5px;
    }
    .icon svg {
      fill: #818384;
    }
    .icon:hover {
      background: rgb(237, 237, 237);
    }
    .icon > div:nth-child(1) {
      font-size: 23px;
      font-weight: 400;
      height: 22px;
      line-height: 20px;
      vertical-align: middle;
      width: 20px;
      margin-right: 7px;
    }
    .icon > div {
      margin-right: 8px;
    }
    .last {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      position: relative;
      .icon > div:nth-child(1) {
        font-size: 25px !important;
        height: 28px;
        width: 25px;
      }

      .icon > div:nth-child(2) {
        font-size: 19px;
        height: 18px;
        margin-top: 0px;
      }
    }
  }

  .hidden {
    width: 125px;
    height: max-content;
    position: absolute;
    top: 40px;
    right: -41px;
    border: 1px solid #edeff1;

    box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
    color: #1c1c1c;
    overflow: hidden;
    background-color: #ffffff;
    position: absolute;
    z-index: 10;

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start !important;
      border-bottom: 1px solid rgba(28, 28, 28, 0.2);
      border-radius: 0px !important;
      margin-bottom: 5px;
      padding: 15px 8px !important;
    }
    & .iconDiv {
      height: 20px !important;
    }

    div:hover {
      background: none !important;
    }
  }
`;

function Feed() {
  const { isLight } = useSelector((state) => state.color);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const handleClick = (n = 1) => {
    if (n === 1) setValue(1);
    if (n === 2) setValue(2);
    if (n === 3) setValue(3);
    setOpen((pre) => !pre);
  };
  const handleClickAway = () => {
    console.log("hh");
    setOpen(false);
  };
  return (
    <Con isLight={isLight}>
      <CreatePost />
      <div className="menu">
        <div>Popular Post</div>
        <div className="menuItem">
          <div className="icon firstIcon">
            <div>
              <IoFlame />
            </div>
            <div>Hot</div>
          </div>
          <div className="icon">
            <div>
              <AiOutlineStar />
            </div>
            <div>New</div>
          </div>
          <div className="icon">
            <div>
              <CgArrowUpR />
            </div>
            <div>Top</div>
          </div>
          <div className="icon">
            <div>
              <BsThreeDots />
            </div>
          </div>
          <div className="last" onClickAway={handleClickAway}>
            <div className="icon" onClick={handleClick}>
              <div>
                {value === 1 ? (
                  <RiLayoutRowLine />
                ) : value === 2 ? (
                  <BsLayoutThreeColumns />
                ) : (
                  <IoReorderFourSharp />
                )}
              </div>
              <div>
                <RiArrowDownSLine />
              </div>
            </div>
            {open && (
              <div className="hidden">
                <div
                  className="icon"
                  onClick={() => {
                    handleClick(1);
                  }}
                >
                  <div className="iconDiv">
                    <RiLayoutRowLine />
                  </div>
                  <div>Card</div>
                </div>

                <div
                  className="icon"
                  onClick={() => {
                    handleClick(2);
                  }}
                >
                  <div className="iconDiv">
                    <BsLayoutThreeColumns />
                  </div>
                  <div>Classic</div>
                </div>

                <div
                  className="icon"
                  onClick={() => {
                    handleClick(3);
                  }}
                  style={{ borderBottom: "none" }}
                >
                  <div className="iconDiv">
                    <IoReorderFourSharp />
                  </div>
                  <div>Compact</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FeedItem />
    </Con>
  );
}

export { Feed };
