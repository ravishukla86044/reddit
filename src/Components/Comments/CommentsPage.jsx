import { CommentsItem } from "./CommentItem";
import styled from "styled-components";
import { FeedItem } from "../HomePage/Feed/FeedItem";

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
  return (
    <StyledDiv>
      <div className="feedDiv">
        <FeedItem comments={true} />
        {arr.map((a) => (
          <CommentsItem data={a} />
        ))}
      </div>
      <div>
        <div className="fake"></div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: rgb(46, 47, 48);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .feedDiv > div:nth-child(1) {
    margin-bottom: -10px;
  }
  & > div {
    margin-top: 30px;
  }
  & > div:nth-child(2) {
    margin-top: 30px;
    margin-left: 30px;
  }
  .fake {
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }
`;
export { CommentsPage };
