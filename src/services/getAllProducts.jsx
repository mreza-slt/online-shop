import http from "./httpRequest";

export const getAllProducts = () => {
  return http.get("/product");
};
