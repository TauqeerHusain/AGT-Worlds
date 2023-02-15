import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputRegisterGroup = () => {
  return (
    <div className="form border rounded">
      <div className="d-flex">
        <input
          type="text"
          placeholder="First Name"
          className="form_input border-end"
        />
        <input type="text" placeholder="Last Name" className="form_input" />
      </div>
      <div className="">
        <input type="email" placeholder="Email" className="form_input" />
      </div>
      <div className="form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </div>
      <div className="form_input">
        <input type="password" placeholder="Confirm Password" />
      </div>
    </div>
  );
};

export default InputRegisterGroup;
