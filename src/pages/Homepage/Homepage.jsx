/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import homepage from "../../assets/homepage.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { logOut, login } from "../../Store/store";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { setGoogleInfo } from "../../Store/store";

export const Registration = () => {
  return (
    <div className="shakingAnimation my-1">
      <small className="text-red-500 fw-bold">*Account Not Found ?</small> -{" "}
      <Link
        to="/registration"
        className=" hover:underline no-underline"
        style={{ color: "#02646d" }}
      >
        Register here!
      </Link>
    </div>
  );
};

export const Homepage = () => {
  const [email, setEmail] = useState([]);
  `12`;
  const [users, setUsers] = useState("");
  const [err, setErr] = useState("");
  const [google, setGoogle] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  // const isRegistered = useSelector((state) => state.isRegistered);
  // console.log(`homepage ${isRegistered}`);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${google.access_token}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${google.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setUserInfo(result);
      dispatch(setGoogleInfo(result));
      console.log(result);
      navigate("/blog");
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (res) => {
      setGoogle(res);
    },
    onError: (err) => {
      console.error("Google login error:", err);
      setErrMsg(err.message);
    },
  });

  const handleEmail = (e) => {
    dispatch(login(e.target.value));
    setUsers(e.target.value);
  };

  const handleGetStarted = () => {
    let getUsers = email.find((user) => user.email === users);
    if (getUsers === undefined) {
      toast.error("User Not Found");
      setErr(<Registration />);
    } else {
      navigate("/blog");
    }
  };

  useEffect(() => {
    if (google) fetchUserInfo();
    axios
      .get("http://127.0.0.1:2001/users")
      .then((res) => setEmail(res.data))
      .catch((err) => console.log(err));
  }, [google]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center container my-5 gap-5 homepage">
        <div className="fw-bold" style={{ color: "#02646d" }}>
          <p>Help and support the creative community</p>
          <h1 className="text-7xl">We are Creative</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex text-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none p-2 border border-1 w-80 me-2"
              name="email"
              onChange={handleEmail}
            />
            <button
              className="text-white py-2 px-3 rounded-sm uppercase flex items-center"
              style={{ backgroundColor: "#02646d" }}
              onClick={handleGetStarted}
            >
              start
              <small className="ms-2">
                <FaArrowRightLong />
              </small>
            </button>
          </div>
          <p className="text-red-500 fw-bold">{err}</p>
          <div>
            <button
              className="border py-2.5 rounded-sm googleBtn"
              onClick={handleGoogleLogin}
            >
              <div className="flex items-center">
                <FcGoogle /> &nbsp;
                <span className="capitalize text-sm">Login with goolge</span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <img src={homepage} alt="" className="rounded-xl" />
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};
