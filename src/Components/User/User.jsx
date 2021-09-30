import { Feed } from "../HomePage/Feed/Feed";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { UserHeader } from "./UserHeader";

function User() {
  const { isLight } = useSelector((state) => state.color);
  return (
    <>
      <UserHeader />
      <StyledDiv isLight={isLight}>
        <div className="feedDiv">
          <Feed />
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
  background: ${(props) => (props.isLight ? "#dae0e6" : "rgb(3,3,3)")};
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
export { User };
