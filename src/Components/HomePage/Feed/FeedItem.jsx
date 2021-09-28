import styled from "styled-components";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
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
    align-items: start;
    margin: 0 8px 8px;
    position: relative;
  }
  .profileImg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
  }
  .text {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
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
        <div className="upper">
          <div className="profileImg">
            <img
              src="https://styles.redditmedia.com/t5_3mnyi/styles/communityIcon_non5va69co441.png?width=256&s=b15586edb26a9302d97ed8656e4a2530d88d3db3"
              alt=""
            />
          </div>
          <div className="text">
            <span>r/sdfsf</span>
            <span>Posted by r/sdfsdf</span>
            <span>8 hours ago</span>
          </div>
        </div>
      </Box>
    </Con>
  );
}

export { FeedItem };
