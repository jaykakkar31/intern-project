import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBankDetails } from "../../../../services/api";
import Settings from "./Settings";
import "./settings.css";
const Billing = ({ educator }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    accountNo: String,
    bankName: String,
    holder: String,
    ifsc: String,
    upi: String,
    // accountNo: educator.bankDetails?.accountNo,
    // bankName: educator.bankDetails?.bankName,
    // holder: educator.bankDetails?.holder,
    // ifsc: educator.bankDetails?.ifsc,
    // upi: educator.bankDetails?.upi,
  });
  useEffect(() => {
    setPaymentInfo(educator.bankDetails);
  }, [educator]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = educator._id;
    console.log(id);
    console.log(paymentInfo);
    // window.location = "/educator/privacy";
    try {
      await updateBankDetails(paymentInfo, id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="educator-account flex">
      <div className="common">
        <Settings educator={educator} />
      </div>
      <div className="account">
        <form onSubmit={handleSubmit}>
          <input
            value={paymentInfo?.accountNo}
            name="accountNo"
            placeholder="Account No."
            onChange={handleChange}
          />
          <input
            value={paymentInfo?.bankName}
            name="bankName"
            placeholder="Bank Name"
            onChange={handleChange}
          />
          <input
            value={paymentInfo?.ifsc}
            name="ifsc"
            placeholder="IFSC"
            onChange={handleChange}
          />
          <input
            value={paymentInfo?.holder}
            name="holder"
            placeholder="Holder Name"
            onChange={handleChange}
          />
          <input
            value={paymentInfo?.upi}
            name="upi"
            placeholder="Upi id"
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Billing;
