import { NIGHT_MODE, LIGHT_MODE } from "./actionType";

const nightMode = () => {
  return {
    type: NIGHT_MODE,
  };
};
const lightMode = () => {
  return {
    type: LIGHT_MODE,
  };
};

export { nightMode, lightMode };
