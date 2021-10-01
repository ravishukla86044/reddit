import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

function AllChatMember({ data, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendsId = data.members.find((a) => a !== currentUser._id);
    getUser(friendsId);
  }, []);

  async function getUser(friendsId) {
    const res = await axios.get(`https://reddit-new.herokuapp.com/users/${friendsId}`);
    setUser(res.data);
  }

  return (
    <User>
      <div></div>
      <div></div>
    </User>
  );
}

const User = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin: 5px;
  }
  & > div:nth-child(1) {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`;
export { AllChatMember };
