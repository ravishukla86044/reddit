import { CommentsItem } from "./CommentItem";
import styled from "styled-components";
import { FeedItem } from "../HomePage/Feed/FeedItem";
import { useSelector } from "react-redux";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { RiFileListLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";

const arr = [
  {
    time: "8 hours",
    communityName: "sdfsf",
    votes: 23,
    comment: "sdfsdfsfsdfsffssfsf",
    profileImg:
      "https://styles.redditmedia.com/t5_3mnyi/styles/communityIcon_non5va69co441.png?width=256&s=b15586edb26a9302d97ed8656e4a2530d88d3db3",
  },
  {
    time: "10 hours",
    communityName: "lghkldg",
    votes: 23,
    comment: "ubmsb oijsdio ijsd sodjf",
    profileImg:
      "https://styles.redditmedia.com/t5_3mnyi/styles/communityIcon_non5va69co441.png?width=256&s=b15586edb26a9302d97ed8656e4a2530d88d3db3",
  },
  {
    time: "15hours",
    communityName: "kbian",
    votes: 23,
    comment: "hhhhhh hhhhhhhhhh hhhhhhhh",
    profileImg:
      "https://styles.redditmedia.com/t5_3mnyi/styles/communityIcon_non5va69co441.png?width=256&s=b15586edb26a9302d97ed8656e4a2530d88d3db3",
  },
];

function CommentsPage() {
  const { isLight } = useSelector((state) => state.color);
  const history = useHistory();
  return (
    <StyledDiv isLight={isLight}>
      <div className="commentHeader">
        <div>
          <div className="likeDiv">
            <Likes isLight={isLight}>
              <ImArrowUp />
              <div>2</div>
              <ImArrowDown />
            </Likes>
            <div className="upperTitle">
              <RiFileListLine />
              <div>thfdffdsdfdfd</div>
            </div>
          </div>
          <div
            onClick={() => {
              history.goBack();
            }}
            className="commentClose"
          >
            <IoMdClose />
            <div>Close</div>
          </div>
        </div>
      </div>
      <div>
        <div className="feedDiv">
          <FeedItem comments={true} />
          {arr.map((a) => (
            <CommentsItem data={a} />
          ))}
        </div>
        <div className="sideDiv">
          <div className="fake"></div>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: rgb(46, 47, 48);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .feedDiv > div:nth-child(1) {
    margin-bottom: -10px;
  }
  & > div:nth-child(2) {
    max-width: 1068px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${(props) => (props.isLight ? "#DAE0E6" : "#030303")};
    box-sizing: border-box;
    padding: 0px 60px;
  }
  .feedDiv {
    margin-top: 30px;
  }
  .sideDiv {
    margin-top: 30px;
    margin-left: 30px;
  }
  .fake {
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }
  .commentHeader {
    background: #030303;
    box-sizing: border-box;
    height: 48px;
    left: 0;
    margin: 0 auto;
    max-width: 1068px;
    position: sticky;
    right: 0;
    top: 0;
    transition: top 0.3s ease;
    width: calc(100% - 160px);
    z-index: 1;
    color: #d7dadc;

    > div {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      height: 100%;
      margin: auto;
      padding: 0 38px 0 57px;
      width: 100%;
    }
  }
  .likeDiv {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .upperTitle {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      line-height: 30px;
      fill: #d7dadc;
      cursor: pointer;
      height: 30px;
      width: 20px;
      margin-right: 10px;
    }

    > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  .commentClose {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      fill: #d7dadc !important;
      font-size: 25px;
      margin-right: 2px;
    }
    div {
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

const Likes = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 4px 8px 0;
  align-items: center;
  justify-content: space-evenly;
  width: 70px;
  margin-right: 10px;
  & > div:nth-child(2) {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    pointer-events: none;
    word-break: normal;
    margin: 0px 5px;
    color: "#d7dadc";
  }
  & > svg {
    line-height: 30px;
    fill: #818384;
    cursor: pointer;
    opacity: 0.8;
    height: 30px;
    width: 20px;
  }
  & > svg:nth-child(3) {
    margin-top: 3px;
  }
  & > svg:hover {
    background: rgb(237, 237, 237);
    fill: #4b5864;
  }
`;
export { CommentsPage };
