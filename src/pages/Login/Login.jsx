/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./login.css";
import { IoEyeOff, IoEyeOutline, IoPersonCircleOutline } from "react-icons/io5";
import * as yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const Login = () => {
  const [userData, setUserData] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:2001/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={yup.object({
        username: yup
          .string()
          .required("*Username is required")
          .min(4, "*Name must be at least 4 characters"),
        password: yup
          .string()
          .required("*Password is required")
          .min(8, "*Password must be at least 8 characters long")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "*Create strong password"
          ),
      })}
      onSubmit={(values, action) => {
        let getUsersData = userData.find(
          (user) =>
            user.username === values.username &&
            user.password === values.password
        );
        if (getUsersData) {
          navigate("/blog");
          dispatch(login.login());
          toast.success("User Logged In Successfully");
        } else {
          toast.error("Invalid Data - Please fill valid data");
        }
        action.resetForm();
      }}
    >
      <div style={{ background: "#02646d", height: "100vh" }}>
        <div className="login-page">
          <h1 className="text-white fw-bold uppercase text-center flex justify-center items-center">
            {" "}
            <IoPersonCircleOutline className="me-2" /> login
          </h1>
          <div className="form">
            <Form className="login-form">
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="username"
                  className="rounded-sm "
                  name="username"
                />
                <small className="errorMsg">
                  <ErrorMessage name="username" />
                </small>
              </div>

              <div className="inputForm my-3">
                <Field
                  type={visible ? "text" : "password"}
                  placeholder="password"
                  className="rounded-sm w-full px-3"
                  name="password"
                />

                <div
                  className="cursor-pointer mx-2"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <IoEyeOutline /> : <IoEyeOff />}
                </div>
              </div>
              <small
                className="text-red-500 text-sm fw-bold"
                style={{ position: "relative", top: "-15px" }}
              >
                <ErrorMessage name="password" />
              </small>

              <button type="submit" className="rounded-sm hover:underline">
                login
              </button>

              <button type="submit" className="rounded-sm my-2">
                <Link
                  className="text-white uppercase no-underline hover:underline"
                  to="/"
                >
                  cancel
                </Link>
              </button>
              <p className="message">
                Not registered?{" "}
                <a href="#">
                  <Link to="/registration">Create an account</Link>
                </a>
              </p>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Formik>
  );
};
