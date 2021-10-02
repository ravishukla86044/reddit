import { GiCheckedShield } from "react-icons/gi";
import style from "./RedditPremium.module.css";
import { useSelector } from "react-redux";
export const RedditPremium = () => {
  const { isLight } = useSelector((state) => state.color);
  return (
    <div
      className={style.premiumBox}
      style={
        isLight
          ? { backgroundColor: "#fff", color: "#1a1a1b" }
          : { backgroundColor: "#1a1a1b", color: "#c8cbcd" }
      }
    >
      <div className={style.flexPremium}>
        <div>
          <GiCheckedShield style={{ color: "#FF5414" }} size={30} />
        </div>

        <div className={style.premiumParaBox}>
          <p>Reddit Premium</p>
          <p>The best Reddit experience, with monthly Coins</p>
        </div>
      </div>
      <div className={style.primaryOrangeButtonContainer}>
        <button className={style.primaryOrangeButton}>Try Now</button>
      </div>
    </div>
  );
};
