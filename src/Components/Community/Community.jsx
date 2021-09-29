import { CreatePost } from "../HomePage/Feed/CreatePost";
import { Feed } from "../HomePage/Feed/Feed";

function Community() {
  return (
    <div>
      <CreatePost />
      <Feed community={true} />
    </div>
  );
}
export { Community };
