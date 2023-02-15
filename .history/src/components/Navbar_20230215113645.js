import React, { useContext } from "react";
import logo from "../Assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container-xxl header py-3">
      <div className="container ">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="logo " />
          </div>

          <div className="search-box  ">
            <span>
              <FiSearch />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for your favorite groups in ATG "
              className=" d-lg-flex"
            />
          </div>
          <div className="login d-none d-md-block ">
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <img src={user.img} alt="" className="img-fluid user_img" />
                <p className="mb-0 user_name">{user.name}</p>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            ) : (
              <div className="d-flex">
                <p className="fw-semibold text-end m-0">
                  Create account.{" "}
                  <span className="text-primary">It’s free!</span>
                </p>
                <IoMdArrowDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
