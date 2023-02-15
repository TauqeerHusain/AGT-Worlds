import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputRegisterGroup = () => {
  return (
    <div className="form border rounded">
      <div className="d-flex">
        <div className="form_input border-end">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form_input">
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="list-group-item form_input">
        <input type="email" placeholder="Email" />
      </div>
      <div className="list-group-item form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </div>
      <div className="list-group-item form_input">
        <input type="password" placeholder="Confirm Password" />
      </div>
    </div>
  );
};

export default InputRegisterGroup;
