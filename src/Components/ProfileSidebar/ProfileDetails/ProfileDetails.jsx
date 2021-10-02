import { IoFlowerSharp } from "react-icons/io5";
import style from "./ProfileDetails.module.css";
import { BsCardText } from "react-icons/bs";
import { GiFlowerPot } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
export const ProfileDetails = () => {
  const { isLight } = useSelector((state) => state.color);
  const [showMoreOption, setShowMoreOption] = useState(true);
  return (
    <div
      className={style.ProfileDetailsContainer}
      style={
        isLight
          ? { backgroundColor: "#fff", color: "#1a1a1b" }
          : { backgroundColor: "#1a1a1b", color: "#c8cbcd" }
      }
    >
      <div className={style.blueBackGround}>
        <div>
          <img src="https://res.cloudinary.com/dwulcntnx/image/upload/v1633062061/a7dqizsyb37mpavxedai.jpg" alt="" />
          <p>Username</p>
        </div>
      </div>
      <div className={style.createButtonContainer}>
        <button className={style.createAvatarButton}>
          <span>Update profile picture</span>
        </button>
      </div>
      <div className={style.description}>
        <div className={`${style.padding10} ${style.countDown}`}>
          <div>
            <span className={style.boldHeading}>Karma</span>
            <br />
            <span className={style.subHeading}>
              <IoFlowerSharp style={{ color: "#0079d3", marginRight: "3px" }} />
              <span className={style.subHeading}>743</span>
            </span>
          </div>
          <div>
            <span className={style.boldHeading}>Cake Day</span>
            <br />
            <span>
              <BsCardText
                style={{ color: "#0079d3", marginRight: "3px" }}
                size={10}
              />
              <span className={style.subHeading}>Created Jan 27, 2013</span>
            </span>
          </div>
        </div>

        <div className={style.buttonContainer}>
          <button className={style.primaryButton}>New Post</button>
        </div>
      </div>
      {showMoreOption ? (
        ""
      ) : (
        <div className={style.moreOptionBox}>
          <button className={style.moreOption}>Send Message</button>
          <br />
          <button className={style.moreOption}>Report User</button>
        </div>
      )}
      <div className={style.moreOptionContainer}>
        <button
          className={style.moreOption}
          onClick={() => setShowMoreOption(!showMoreOption)}
        >
          {showMoreOption ? "More Options" : "Fewer Options"}
        </button>
      </div>
    </div>
  );
};
