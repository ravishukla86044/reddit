import style from "./FilterFlair.module.css";
export const FilterFlair = () => {
  const filterArray = [
    "abc",
    "cdefghi",
    "jkklskdia",
    "ldhfheoo",
    "mlaigdhainh",
    "ohsiuhfidwfnsh",
  ];
  return (
    <div className={style.filterFlairContainer}>
      <div className={style.blueBackGround}>
        <span>Filter By Flair</span>
      </div>
      <div className={style.buttonBox}>
        {filterArray.map((ele, index) => {
          return (
            <button className={style.buttons} key={index + 1}>
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};
