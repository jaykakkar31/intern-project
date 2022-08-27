import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("educatorToken");
    window.location = "/";
  },[]);

  return null;
};
export default Logout;
