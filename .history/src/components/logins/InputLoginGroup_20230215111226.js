import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputLoginGroup = () => {
  return (
    <div className="form border rounded ">
      <div className="form_input ">
        <input type="email" placeholder="Email" />
      </div>
      <div className="form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </div>
    </div>
  );
};

export default InputLoginGroup;
