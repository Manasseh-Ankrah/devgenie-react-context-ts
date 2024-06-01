import { actionProp, stateProp } from "../types/types";

export const initialState = {
  isDarkMode: false,
};

const reducer = (state: stateProp, action: actionProp) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !action.item.isDarkMode,
      };

    default:
      return state;
  }
};

export default reducer;
