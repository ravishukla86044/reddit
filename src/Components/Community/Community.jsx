import { CreatePost } from "../HomePage/Feed/CreatePost";
import { Feed } from "../HomePage/Feed/Feed";
import styled from "styled-components";
import { CommunityHeader } from "./CummunityHeader";
import { useSelector } from "react-redux";

const data = {
  communityBackground:
    "https://styles.redditmedia.com/t5_2uii8/styles/bannerBackgroundImage_v0a328mdtmk71.jpg?width=4000&format=pjpg&s=18a518f544beba0c58eb683bcbe90f0dcae79234",
  communityProfile:
    "https://a.thumbs.redditmedia.com/OT_3LiWYRmrHg-clwjXQN84qauGtBNRPJykzA2GA648.png",
  communityName: "marvelstudios",
  title: "Marvel Studios and the Marvel Cinematic Universe",
};

function Community() {
  const { isLight } = useSelector((state) => state.color);
  return (
    <>
      <CommunityHeader data={data} />
      <StyledDiv isLight={isLight}>
        <div className="feedDiv">
          <CreatePost />
          <Feed community={true} />
        </div>
        <div>
          <div className="fake"></div>
        </div>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => (props.isLight ? "#edeff1" : "rgb(3,3,3)")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
export { Community };
