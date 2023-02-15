import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputLoginGroup = () => {
  return (
    <div className="form border rounded ">
      <li className=" form_input ">
        <input type="email" placeholder="Email" />
      </li>
      <li className=" form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </li>
    </div>
  );
};

export default InputLoginGroup;
