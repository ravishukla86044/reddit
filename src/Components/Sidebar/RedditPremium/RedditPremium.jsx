import { GiCheckedShield } from "react-icons/gi";
import style from "./RedditPremium.module.css";
export const RedditPremium = () => {
  return (
    <div className={style.premiumBox}>
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
