import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePersonal } from "../../../../services/api";
import Settings from "./Settings";
import "./settings.css";
// import bcrypt from "bcrypt";
import { ToastContainer, toast } from "react-toastify";

const Account = ({ educator }) => {
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    currentAdd: "",
    pswrd: "",
    cnfrm_pswrd: "",
    new_pswrd: "",
  });
  useEffect(() => {
    setDetails(educator.personalInfo);
  }, [educator]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = educator._id;
    console.log(details);

    try {
      await updatePersonal(details, id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="educator-account">
      <ToastContainer />
      <div className="common">
        <Settings educator={educator} />
      </div>

      <div className="account">
        <form onSubmit={handleSubmit}>
          <input
            name="fName"
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            value={details?.fName}
          />
          <input
            name="lName"
            onChange={handleChange}
            value={details?.lName}
            placeholder="Last Name"
          />
          <input name="email" value={educator.email} placeholder="Email" />
          <input
            name="mobile"
            onChange={handleChange}
            value={educator.mobile}
            placeholder="Contact"
          />
          <input
            name="country"
            onChange={handleChange}
            value={details?.country}
            placeholder="Country"
          />
          <input
            name="state"
            onChange={handleChange}
            value={details?.state}
            placeholder="State"
          />
          <input
            name="district"
            onChange={handleChange}
            value={details?.district}
            placeholder="District"
          />
          <input
            name="pincode"
            onChange={handleChange}
            value={details?.pincode}
            placeholder="Pincode"
          />
          <input
            name="currentAdd"
            onChange={handleChange}
            value={details?.currentAdd}
            placeholder="Current Address"
          />
          <input
            type="password"
            name="current_pswrd"
            onChange={handleChange}
            placeholder="Enter current password"
          />
          <input
            type="password"
            name="new_pswrd"
            onChange={handleChange}
            placeholder="Enter new password"
            value={details?.new_pswrd}
          />
          <input
            type="password"
            name="cnfrm_pswrd"
            onChange={handleChange}
            placeholder="Confirm password"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
