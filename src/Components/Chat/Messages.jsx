import styled from "styled-components";

function Messages({ data, currentUser }) {
  return (
    <Div>
      <div className={currentUser ? "right" : "left"}></div>
    </Div>
  );
}

const Div = styled.div`
  width: 90%;
  box-sizing: border-box;
  height: 20px;

  .right {
    text-align: right;
  }
  .left {
    text-align: left;
  }
`;

export { Messages };
