import { IoIosArrowUp } from "react-icons/io";
import style from "./TopCommunity.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Avatar  from "@material-ui/core/Avatar";


export const TopCommunity = () => {
  const { isLight } = useSelector((state) => state.color);
  const [communities, setCommunities] = useState([]);

  useEffect((el) => {
    axios.get("https://reddit-new.herokuapp.com/community")
      .then((res) => {
        setCommunities(res.data.communities.slice(0,5));
      }).catch((err) => {
        console.log(err);
      });
  })

  return (
    <div
      className={style.backgroundWhite}
      style={
        isLight ? { backgroundColor: "#fff" } : { backgroundColor: "#1a1a1b" }
      }
    >
      <div className={style.TopComunityHeading}>
        <h4>Top Aww Communities</h4>
      </div>
      {communities.map((el,index) => (
        <div key={el._id} className={style.community}>
          <span>
            <div
              className={style.communityDetails}
              style={isLight ? { color: "#1c1c1c" } : { color: "#c8cbcd" }}
            >
              <span className={style.indexing}>{index + 1}</span>
              <IoIosArrowUp style={{ color: "#46D160" }} />
              <div>
                <Avatar style={{background:`${color[index]}`,margin:"0 8px"}}>{ el.name.charAt(0) }</Avatar>
              </div>

              <span>r/{el.name}</span>
            </div>
          </span>
        </div>
      ))}
      <div className={style.primaryButtonContainer}>
        <button className={style.primaryButton}>View All</button>
      </div>
      <div className={style.tags}>
        <span style={isLight ? { color: "#0079d3" } : { color: "#c8cbcd" }}>
          Top
        </span>
        <span style={isLight ? { color: "#0079d3" } : { color: "#c8cbcd" }}>
          Near You
        </span>

        <span style={isLight ? { color: "#0079d3" } : { color: "#c8cbcd" }}>
          News
        </span>
        <span style={isLight ? { color: "#0079d3" } : { color: "#c8cbcd" }}>
          Sports
        </span>
      </div>
    </div>
  );
};

const color = ["#0079D3", "#FF5C58", "#6FCB64", "#916CBF", "#FFD461",];