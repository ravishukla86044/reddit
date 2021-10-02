import styled from "styled-components";

function Messages({ data, currentUser }) {
  return (
    <Div currentUser={currentUser}>
      <div className={currentUser ? "right" : "left"}>{data.text}</div>
    </Div>
  );
}

const Div = styled.div`
  height: 43px;
  width: 100%;
  padding: 7px 24px;
  display: flex;
  padding: 7px 24px;
  justify-content: ${(props) => (props.currentUser ? "right" : "left")};

  & > div {
    padding: 5px;
    border-radius: 4px;
    background: ${(props) => (props.currentUser ? "#cfcccc" : "#5094f9;")};
  }
`;

export { Messages };
