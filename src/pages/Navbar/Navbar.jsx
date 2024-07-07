/* eslint-disable no-unused-vars */
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logOut } from "../../Store/store.js";
import { googleLogout } from "@react-oauth/google";

export const Navbar = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const userGoogleInfo = useSelector((state) => state.googleInfo);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    if (userGoogleInfo?.id) {
      googleLogout().then(() => {
        dispatch(logOut());
      });
    } else {
      dispatch(logOut());
    }
  };
  useEffect(() => {
    // console.log(userGoogleInfo);
  });
  return (
    <div className="navbar-container sticky top-0 pt-1">
      <header>
        <div className="flex justify-center items-center mt-4">
          <p className="rounded-3xl px-3 py-1 primaryCol secondaryCol cursor-pointer">
            REACT - BLOG
          </p>
        </div>
        <div className="bg-body-tertiary container-fluid  w-full py-2 mt-3 flex justify-between">
          <div>
            <img src={logo} alt="" className="logo cursor-pointer" />
          </div>

          {(isLogin || userGoogleInfo) && location.pathname !== "/" && (
            <div className="flex flex-wrap gap-2 uppercase justify-center items-center primaryCol cursor-pointer">
              <Link
                to="/blog"
                className="nav-item ml-3 no-underline primaryCol"
              >
                Blogs
              </Link>
              <Link
                to="/addblog"
                className="nav-item ml-3 no-underline primaryCol"
              >
                Add Blog
              </Link>

              <Link
                to="/about"
                className="nav-item ml-3 no-underline primaryCol"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-item ml-3 no-underline primaryCol"
              >
                Contact
              </Link>
            </div>
          )}

          <div>
            {isLogin || userGoogleInfo ? (
              <div className="flex gap-2">
                {userGoogleInfo && (
                  <div className="flex">
                    <img
                      src={userGoogleInfo.picture}
                      alt="Img"
                      className="profileImg"
                    />
                    <span className="verticle"></span>{" "}
                  </div>
                )}
                <Link to="/" onClick={handleLogOut}>
                  <button className="loginBtn text-white py-1.5 px-3 rounded-3xl hover:underline">
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="loginBtn text-white py-1.5 px-4 rounded-3xl hover:underline">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
