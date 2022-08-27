import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi-browser";
import { update } from "../../../services/api";

const Details = ({ student }) => {
  const initialState = {
    name: "",
    mobile: "",
    email: "",
  };
  const [details, setDetails] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const [name, setname] = useState(true);
  const [mobile, setmobile] = useState(true);

  const schema = {
    name: Joi.string().required().min(3).label("Name"),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    mobile: Joi.string().label("Mobile"),
  };
  const handleChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });
  const handleSubmit = async (event) => {
    const options = { abortEarly: false };
    let errors = [];
    event.preventDefault();
    const result = Joi.validate(details, schema, options);
    if (!result.error) {
      setErrors(errors);
    } else {
      event.preventDefault();
      for (let item of result.error.details) {
        errors.push(item.message);
      }
      setErrors(errors);
    }
    if (errors.length > 0) return;
    event.preventDefault();
    try {
      await update(details, student._id);
      window.location = "/me";
    } catch (ex) {
      if (ex.response) {
        toast.error(ex.response.data);
      }
    }
  };
  useEffect(() => {
    if (student)
      setDetails({
        name: student.name,
        mobile: student.mobile,
        email: student.email,
      });
  }, [student]);
  return (
    <div className='students-pro-det'>
      <ToastContainer />
      <h2>My Profile</h2>
      <img height='100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU' alt/>
      {/* <i className="fa fa-user fa-5x" aria-hidden="true"></i> */}
      <div className="update-details">
        {errors.length !== 0 && (
          <div className="alert alert-danger" role="alert">
            {errors[0]}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="form-group">
            <label>Name</label>
            <div className="input-group">
              <input
                type="text"
                value={details.name}
                onChange={handleChange}
                className="form-control"
                disabled={name}
                name="name"
              />
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={() => setname(false)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <input
                type="text"
                value={details.email}
                onChange={handleChange}
                className="form-control"
                disabled
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <div className="input-group">
              <input
                type="text"
                value={details.mobile}
                onChange={handleChange}
                className="form-control"
                disabled={mobile}
                name="mobile"
              />
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={() => setmobile(false)}
              />
            </div>
          </div>
          <button
            className="btn"
            // disabled={name === false || mobile === false}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
