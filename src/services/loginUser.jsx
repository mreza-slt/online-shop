import http from "./httpRequest";

export const loginUser = (data) => {
  return http.post("/user/login", data);
};
