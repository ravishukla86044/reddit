import { BsCardText } from "react-icons/bs";
import style from "./AboutCommunity.module.css";
export const AboutCommunity = () => {
  return (
    <div className={style.aboutCommunityContainer}>
      <div className={style.blueBackGround}>
        <span>About Community</span>
      </div>
      <div className={`${style.padding10}`}>
        <p>This subreddit is for unexpected twists in videos and gifs</p>
      </div>
      <div className={`${style.padding10} ${style.countDown}`}>
        <div>
          <span className={style.boldHeading}>4.7m </span>
          <br />
          <span className={style.subHeading}>Members</span>
        </div>
        <div>
          <span className={style.boldHeading}>32.2k </span>
          <br />
          <span className={style.subHeading}>Online</span>
        </div>
      </div>
      <div className={`${style.padding10} ${style.createdDate}`}>
        <BsCardText />
        <span>Created Jan 27, 2013</span>
      </div>
    </div>
  );
};
