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

      <input type="email" placeholder="Email" className="form_input" />

      <input
        type="password"
        placeholder="Password"
        className="form_input d-flex align-items-center"
      />
      <AiOutlineEye />

      <div className="form_input">
        <input type="password" placeholder="Confirm Password" />
      </div>
    </div>
  );
};

export default InputRegisterGroup;
