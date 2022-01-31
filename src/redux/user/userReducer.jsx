import { GET_USER_DATA, SET_USER_DATA } from "./userType";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      const userData = JSON.parse(localStorage.getItem("stateAuth")) || null;
      return {
        ...state,
        user: userData,
      };
    case SET_USER_DATA:
      localStorage.setItem("stateAuth", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
