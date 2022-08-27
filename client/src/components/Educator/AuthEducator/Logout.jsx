import { useEffect } from "react";

const EducatorLogout = () => {
  useEffect(() => {
    localStorage.removeItem("educatorToken");
    window.location = "/";
  });

  return null;
};
export default EducatorLogout;
