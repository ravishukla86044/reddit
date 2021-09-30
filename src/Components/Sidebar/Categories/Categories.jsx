import style from "./Categories.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
export const Categories = () => {
  const [openSelect, setOpenSelect] = useState(true);

  const handleSetOpen = () => {
    setOpenSelect(!openSelect);
  };
  const arr = [
    "POPULAR COMMUNITIES",
    "GAMING",
    "SPORTS",
    "TV",
    "TRAVEL",
    "HEALTH & FITNESS",
    "FASHION",
  ];
  return (
    <div className={style.categoryContainer}>
      {arr.map((ele, index) => (
        <div key={index} className={style.buttonStyling}>
          <span>{ele}</span>
          {openSelect ? (
            <button onClick={handleSetOpen}>
              <IoIosArrowDown />
            </button>
          ) : (
            <button onClick={handleSetOpen}>
              <IoIosArrowUp />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
