import { Feed } from "./Feed/Feed";
import styled from "styled-components";

function HomePage() {
  return (
    <StyledDiv>
      <div className="feedDiv">
        <Feed />
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
  background: #dae0e6;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & > div {
    margin-top: 30px;
  }
  & > div:nth-child(2) {
    margin-top: 59px;
    margin-left: 30px;
  }
  .fake {
    width: 300px;
    height: 200px;
    border: 1px solid black;
  }
`;

export default HomePage;
