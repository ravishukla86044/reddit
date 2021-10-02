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
    const res = await axios.get(`http://localhost:3001/users/${friendsId}`);
    setUser(res.data.user);
  }

  return (
    <User>
      <div>
        <img src={user?.profile_url} alt="" />
      </div>
      <div>{user?.name}</div>
    </User>
  );
}

const User = styled.div`
  cursor: pointer;
  padding: 5px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin: 5px;
  }
  & > div:nth-child(1) {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export { AllChatMember };
