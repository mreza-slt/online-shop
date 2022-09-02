import { GET_USER_DATA, SET_USER_DATA } from "./userType";

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};
export const setUserData = (data) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};
