import React from "react";
import logo from "./Assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
function App() {
  return (
    <div className="py-3 container-xxl header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="search-box">
              <span>
                <FiSearch />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for your favorite groups in ATG "
                className="d-none d-lg-flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
