import http from "./httpRequest";

export const getMerchData = (token) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  http.get("http://localhost:5000/api/user", header);
};
