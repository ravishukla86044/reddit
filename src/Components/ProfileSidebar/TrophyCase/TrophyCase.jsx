import style from "./TrophyCase.module.css";

export const TrophyCase = () => {
  return (
    <div className={style.TrophyCaseContainer}>
      <span className={style.heading}>Trophy Case (2)</span>
      <div className={style.verified}>
        <img
          src="https://www.redditstatic.com/awards2/3_year_club-40.png"
          alt=""
        />
        <span>Three-Year Club</span>
      </div>
      <div className={style.verified}>
        <img
          src="https://www.redditstatic.com/awards2/verified_email-40.png"
          alt=""
        />
        <span>Verified Email</span>
      </div>
    </div>
  );
};
