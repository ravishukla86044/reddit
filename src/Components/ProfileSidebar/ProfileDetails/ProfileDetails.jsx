import { IoFlowerSharp } from "react-icons/io5";
import style from "./ProfileDetails.module.css";
import { BsCardText } from "react-icons/bs";
import { GiFlowerPot } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";
export const ProfileDetails = () => {
  const [showMoreOption, setShowMoreOption] = useState(true);
  return (
    <div className={style.ProfileDetailsContainer}>
      <div className={style.blueBackGround}></div>
      <div className={style.avtarContainer}>
        <img
          src="https://i.redd.it/snoovatar/avatars/966e7dba-ebec-42a5-93d2-cda2ab2b438d.png"
          alt=""
        />
        <span className={style.profileName}>rumblingresonance</span>
        <span className={style.profilelink}>u/rumblingresonance .7m</span>
      </div>
      <div className={style.avatarButtonContainer}>
        <button className={style.createAvatarButton}>
          <span>Create Your Own Avatar </span>
          <span>
            <MdNavigateNext />
          </span>
        </button>
      </div>
      <div className={style.description}>
        <span style={{ padding: "10px" }}>Well Hi There!</span>
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
        <div className={style.award}>
          <GiFlowerPot style={{ color: "gray" }} />
          <button className={style.rating}>+29</button>
          <span className={`${style.subHeading} ${style.lineheight}`}>
            Received the Helpful Award and more in the past 30 days
          </span>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.primaryButton}>Follow</button>
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
