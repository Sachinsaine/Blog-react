/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Field, Form, ErrorMessage, Formik } from "formik";
import { Link } from "react-router-dom";
import "./registration.scss";
import { IoEyeOff, IoEyeOutline, IoPersonCircleOutline } from "react-icons/io5";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const RegistrationPage = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        mobile: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("*Username is required")
          .min(4, "*Name must be at least 4 characters"),
        email: Yup.string()
          .required("*Email is required")
          .email("*Invalid email"),

        mobile: Yup.string()
          .required("*Mobile No. is required")
          .matches(/\+91\d{10}/, "+91 and 10 digit"),

        password: Yup.string()
          .required("*Password is required")
          .min(6, "*Password must be at least 6 character")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "*Create strong password"
          ),
      })}
      onSubmit={(values, action) => {
        axios.post("http://127.0.0.1:2001/adduser", values);
        console.log(values.username);
        action.resetForm();
        if (values.username === undefined) {
          alert("Please fill the input fields");
        } else {
          navigate("/blog");
        }
      }}
    >
      <div style={{ background: "#02646d", height: "100vh" }}>
        <div className="registration-container pt-5">
          <div className="form">
            <Form className="login-form">
              <h4
                style={{ color: "#02646d" }}
                className="fw-bold uppercase text-center flex justify-center items-center"
              >
                {" "}
                <IoPersonCircleOutline className="me-2" /> Registration
              </h4>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Username"
                  className="rounded-sm "
                  name="username"
                  style={{ height: "40px" }}
                />
                <small className="errorMsg">
                  <ErrorMessage name="username" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="email"
                  placeholder="Email"
                  className="rounded-sm"
                  name="email"
                  style={{ height: "40px" }}
                />
                <small className="errorMsg">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Mobile number"
                  className="rounded-sm "
                  name="mobile"
                  style={{ height: "40px" }}
                />
                <small className="errorMsg">
                  <ErrorMessage name="mobile" />
                </small>
              </div>

              <div className="inputForm my-3">
                <Field
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  className="rounded-sm w-full px-3"
                  name="password"
                  style={{ height: "40px" }}
                />

                <div
                  className="cursor-pointer mx-2"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <IoEyeOutline /> : <IoEyeOff />}
                </div>
              </div>
              <small
                className="errorMsg"
                style={{ position: "relative", top: "-15px" }}
              >
                <ErrorMessage name="password" />
              </small>
              <button type="submit" className="rounded-sm hover:underline">
                Register
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
      </div>
    </Formik>
  );
};
