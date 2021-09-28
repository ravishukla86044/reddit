import { FeedItem } from "./FeedItem";
import { CreatePost } from "./CreatePost";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Con = styled.div`
  width: 640px;
  box-sizing: border-box;
  .menu {
    div:nth-child(1) {
      text-align: left;
      padding-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      color: #1a1a1b;
    }
  }
  .menuItem {
    box-sizing: border-box;
    background-color: ${(props) => (props.isLight ? "#FFFFFF" : "#1A1A1B")};
    border-radius: 4px;
    border: 1px solid ${(props) => (props.isLight ? "#ccc" : "#343536")};
    display: flex;
    width: 640px;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    padding: 10px 12px;
  }
`;

function Feed() {
  const { isLight } = useSelector((state) => state.color);
  return (
    <Con isLight={isLight}>
      <CreatePost />
      <div className="menu">
        <div>Popular Post</div>
        <div className="menuItem"></div>
      </div>
      <FeedItem />
    </Con>
  );
}

export { Feed };
