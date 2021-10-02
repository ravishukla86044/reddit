import { IoFlowerSharp } from "react-icons/io5";
import style from "./ProfileDetails.module.css";
import { BsCardText } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { loadData } from "../../../utils/localStorage";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateProfile } from "../../../Redux/auth/actions";

export const ProfileDetails = () => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.color);
  const [showMoreOption, setShowMoreOption] = useState(true);


  const handleFileUplod = (e) => {
    const { _id } = loadData("user");
    const token = loadData("token");
    const formData = new FormData();
    formData.append('profile_url', e.target.files[0]);

    axios.patch(`https://reddit-new.herokuapp.com/users/${_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + token
      }
    }).then((res) => {
      const successAction = updateProfile(res.data.user);
      dispatch(successAction);
      console.log(res.data);
    }).catch ((err) => {
      console.log("err.response", err.response);
    })
  }

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
        <div className={style.createAvatarButton}>
          <span>Update profile picture</span>
        <input onChange={handleFileUplod} type="file" name="myfile" />
        </div>
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
