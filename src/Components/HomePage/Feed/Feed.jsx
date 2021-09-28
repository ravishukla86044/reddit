import { FeedItem } from "./FeedItem";
import { CreatePost } from "./CreatePost";
import styled from "styled-components";

function Feed() {
  return (
    <div>
      <CreatePost />
      <FeedItem />
    </div>
  );
}

export { Feed };
