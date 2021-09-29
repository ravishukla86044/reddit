import styled from "styled-components";
import { ImArrowUp, ImArrowDown, ImRedo } from "react-icons/im";
import { HiOutlinePlus } from "react-icons/hi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
const Con = styled.div`
  position: relative;
  width: 640px;
  min-height: 100px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isLight ? "#FFFFFF" : "#1A1A1B")};
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isLight ? "#ccc" : "#343536")};
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  align-items: flex-start;
  justify-content: center;
  &:hover {
    border: 1px solid ${(props) => (props.isLight ? "#898989" : "#818384")};
  }
`;

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 8px 4px 8px 0;
  position: absolute;
  top: 6px;
  align-items: center;
  justify-content: space-evenly;
  width: 40px;
  & > div:nth-child(2) {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    pointer-events: none;
    word-break: normal;
    color: ${(props) => (props.isLight ? " rgb(26, 26, 27)" : "#d7dadc")};
  }
  & > svg {
    line-height: 30px;
    fill: #818384;
    cursor: pointer;
    opacity: 0.8;
    height: 30px;
    width: 26px;
  }
  & > svg:hover {
    background: rgb(237, 237, 237);
    fill: #4b5864;
  }
`;

const Box = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding-left: 40px;
  .upper {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 8px 8px;
    position: relative;
  }
  .profileImg {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
  }
  .text {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
    span {
      margin-right: 5px;
      cursor: pointer;
    }
    span:hover {
      text-decoration: underline;
    }
    span:nth-child(1) {
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      color: ${(props) => (props.isLight ? " #1c1c1c" : "#d7dadc")};
      display: inline;
      line-height: 20px;

      vertical-align: baseline;
    }
    span:nth-child(n + 2) {
      color: #787c7e;
    }
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
    min-height: 24px;
    min-width: 24px;
    padding: 4px 4px;
    padding-right: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .title {
    margin: 5px 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: ${(props) => (props.isLight ? "#222222" : "#d7dadc")};
    text-align: left;
  }
  .postImage {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;

    img {
      max-height: 512px;
    }
  }
  .comments {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 40px;
    padding-right: 10px;
    fill: #818384;
    cursor: pointer;
    opacity: 0.9 !important;
    color: #818384;
    font-weight: 700;
    font-size: 12px;
    font-family: Arial, sans-serif;
    line-height: 16px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      word-break: normal;
    }
    .icon:hover {
      background: ${(props) => (props.isLight ? "rgb(237, 237, 237)" : "rgba(215, 218, 220, 0.1)")};
    }
    .icon > div:nth-child(1) {
      font-size: 23px;
      font-weight: 400;
      height: 24px;
      line-height: 20px;
      vertical-align: middle;
      width: 20px;
      margin-right: 7px;
    }
    .icon > div {
      margin-right: 8px;
    }
  }
`;

function FeedItem({ community }) {
  const { isLight } = useSelector((state) => state.color);
  return (
    <Con isLight={isLight}>
      <Likes isLight={isLight}>
        <ImArrowUp />
        <div>2</div>
        <ImArrowDown />
      </Likes>
      <Box isLight={isLight}>
        <div className="upper">
          {!community && (
            <div className="profileImg">
              <img
                src="https://styles.redditmedia.com/t5_3mnyi/styles/communityIcon_non5va69co441.png?width=256&s=b15586edb26a9302d97ed8656e4a2530d88d3db3"
                alt=""
              />
            </div>
          )}
          <div className="text">
            <span>{!community && `r/sdfsf`}</span>
            <span>Posted by r/sdfsdf</span>
            <span>8 hours ago</span>
          </div>
          {!community && (
            <div className="join">
              <HiOutlinePlus />
              <span>Join</span>
            </div>
          )}
        </div>
        <div className="title">What sdfsdf dfsdfsf sdfsdf</div>
        <div className="postImage">
          <div>
            <img
              src="https://preview.redd.it/31ihgjkvv5q71.jpg?width=640&crop=smart&auto=webp&s=48f6206ff4d37e6b26758e415d70576eb11ac1af"
              alt=""
            />
          </div>
        </div>
        <div className="comments">
          <div className="icon">
            <div style={{ fontSize: "22px" }}>
              <FaRegCommentAlt />
            </div>
            <div>10 Comments</div>
          </div>
          <div className="icon">
            <div>
              <FiGift />
            </div>
            <div>Awards</div>
          </div>
          <div className="icon">
            <div>
              <ImRedo />
            </div>
            <div>Share</div>
          </div>
          <div className="icon">
            <div>
              <RiBookmarkLine />
            </div>
            <div>Share</div>
          </div>
          <div className="icon">
            <div>
              <BsThreeDots />
            </div>
          </div>
        </div>
      </Box>
    </Con>
  );
}

export { FeedItem };
