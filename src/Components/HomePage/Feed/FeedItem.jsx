import styled from "styled-components";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
const Con = styled.div`
  position: relative;
  width: 640px;
  min-height: 300px;

  box-sizing: border-box;
  background-color: ${(props) => (props.isLight ? "#FFFFFF" : "#1A1A1B")};
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isLight ? "#ccc" : "#343536")};
  display: flex;
  margin-bottom: 16px;
  padding: 8px;

  align-items: center;
  justify-content: center;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 8px 4px 8px 0;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 40px;

  & > svg {
    line-height: 20px;
    fill: #818384;
    cursor: pointer;
    opacity: 0.8;
    height: 20px;
  }
`;

const Box = styled.div`
  padding-top: 8px;
  .upper {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    margin: 0 8px 8px;
    position: relative;
  }
`;

function FeedItem() {
  const { isLight } = useSelector((state) => state.color);
  return (
    <Con isLight={isLight}>
      <Likes>
        <ImArrowUp />
        <div>2</div>
        <ImArrowDown />
      </Likes>
      <Box>
        <div className="upper"></div>
      </Box>
    </Con>
  );
}

export { FeedItem };
