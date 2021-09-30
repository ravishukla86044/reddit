import { IoIosArrowUp } from "react-icons/io";
import style from "./TopCommunity.module.css";
export const TopCommunity = () => {
  const community = [
    {
      img: "https://styles.redditmedia.com/t5_2qixk/styles/communityIcon_7un6h01l6j871.png",
      name: "abc",
    },
    {
      img: "https://styles.redditmedia.com/t5_2qxh7/styles/communityIcon_nbzgv367wcn31.PNG",
      name: "cde",
    },
    {
      img: "https://styles.redditmedia.com/t5_3h47q/styles/communityIcon_tjhylhfxrhp01.jpg?format=pjpg&s=f5eca7dc43ddb9c5dd2c0ec5ce43e5cba6ad9f48",
      name: "ghi",
    },
    {
      img: "https://styles.redditmedia.com/t5_2sqho/styles/communityIcon_5yv6wpzxt5w31.png",
      name: "jkl",
    },
    {
      img: "https://b.thumbs.redditmedia.com/Q9R2vbB9_oXgNWoE3GgdDutm-rgdpDh0Ny1KEJYJMto.png",
      name: "mno",
    },
  ];
  return (
    <div className={style.TopComunityContainer}>
      <div className={style.TopComunityHeading}>
        <h4>Top Aww Communities</h4>
      </div>
      {community.map((ele, index) => (
        <div key={index} className={style.community}>
          <a href="/">
            <div className={style.communityDetails}>
              <span className={style.indexing}>{index + 1}</span>
              <IoIosArrowUp style={{ color: "#46D160" }} />
              <div>
                <img src={ele.img} alt="" />
              </div>

              <span>r/{ele.name}</span>
            </div>
          </a>
        </div>
      ))}
      <div className={style.primaryButtonContainer}>
        <button className={style.primaryButton}>View All</button>
      </div>
      <div className={style.tags}>
        <button>Top</button>
        <button>Near You</button>
        <button>News</button>
        <button>Sports</button>
      </div>
    </div>
  );
};
