import http from "./httpRequest";

export const signupUser = (data) => {
  return http.post("/user/register", data);
};
