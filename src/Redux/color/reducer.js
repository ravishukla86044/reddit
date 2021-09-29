import { NIGHT_MODE, LIGHT_MODE } from "./actionType";

const initState = {
  isLight: false,
};

export const colorReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case NIGHT_MODE:
      return {
        ...state,
        isLight: false,
      };
    case LIGHT_MODE:
      return {
        ...state,
        isLight: true,
      };

    default:
      return state;
  }
};
