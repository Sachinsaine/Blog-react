/* eslint-disable no-unused-vars */
import React from "react";
import "./contact.scss";
import { MdLocationPin } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  return (
    <Formik
      initialValues={{
        blogId: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={Yup.object({
        blogId: Yup.number().required("*This  field is required."),
        email: Yup.string()
          .email("*Please enter a valid Email address.")
          .required("*This field is required."),
        subject: Yup.string()
          .required("*This field is required.")
          .min(2, "*Subject must be at least 2 characters.")
          .max(30, "*Subject should not exceed 30 characters."),
        message: Yup.string()
          .min(10, "*Message must be at least 10 characters.")
          .required("*This field is required."),
      })}
      onSubmit={async (values, action) => {
        try {
          await axios.post("http://127.0.0.1:2001/addquery", values);
          action.resetForm();
          toast.success("Your query has been sent successfully");
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <div className="contact-page">
        <div className="flex">
          <div className="w-50 py-5 px-24">
            <h1 className="t text-6xl">Contact</h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="col flex">
              <div className="col-2">
                <MdLocationPin className="text-3xl" />
              </div>
              <div className="col-10 grid">
                <div className="uppercase fw-light mb-2">Address</div>
                <div className="fw-bold text-2xl">
                  1234 N Spring St, Los Angeles, CA 90012, United States.
                </div>
              </div>
            </div>
            <div className="col flex my-5">
              <div className="col-2">
                <IoCallSharp className="text-3xl" />
              </div>
              <div className="col-10 grid">
                <div className="uppercase fw-light mb-2">Phone</div>
                <div className="fw-bold text-2xl">+01 - 123 456 7890 </div>
              </div>
            </div>
            <div className="col flex my-5">
              <div className="col-2">
                <MdEmail className="text-3xl" />
              </div>
              <div className="col-10 grid">
                <div className="uppercase fw-light mb-2">email</div>
                <div className="fw-bold text-2xl">mail@example.com</div>
              </div>
            </div>
            <div>
              <h6 className="uppercase fw-light mb-2">
                Follow us on social media
              </h6>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <div>
                    <FaYoutube className="text-5xl py-2" />
                  </div>
                  <h1 className="fw-bold">1.2M+</h1>
                  <p className="uppercase fw-light">subcribers</p>
                </div>
                <div className="flex flex-col">
                  <div>
                    <FaSquareInstagram className="text-5xl py-2" />
                  </div>
                  <h1 className="fw-bold">1.8M+</h1>
                  <p className="uppercase fw-light">Followers</p>
                </div>
                <div className="flex flex-col">
                  <div>
                    <FaFacebook className="text-5xl py-2" />
                  </div>
                  <h1 className="fw-bold">800k+</h1>
                  <p className="uppercase fw-light">readers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 contact-container">
            <Form className="contact-form w-75">
              <h1 className="uppercase">Get in Touch</h1>
              <p className="text-white">
                Please fill out the quick form and we will be in touch with
                lightening speed.
              </p>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Enter Blog Id"
                  className="rounded-sm form-control"
                  name="blogId"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="blogId" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="email"
                  placeholder="Enter email"
                  className="rounded-sm form-control"
                  name="email"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Enter subject"
                  className="rounded-sm form-control"
                  name="subject"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="subject" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  rows={6}
                  type="textarea"
                  placeholder="Write your message here..."
                  className="rounded-sm form-control"
                  name="message"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="message" />
                </small>
              </div>
              <div className="flex justify-between">
                <button type="submit" className="messageBtn">
                  send message
                </button>
                <button type="button" className="cancelBtn">
                  <Link className=" no-underline cancelBtn" to="/">
                    cancel
                  </Link>
                </button>
              </div>
              <div className="my-5">
                <div className="horztl"></div>
                <p className="text-white text-center pt-5 text-6xl">
                  Thank You!
                </p>
                <p className="d-grid justify-center">
                  Please check your email for further instructions on how to{" "}
                  <br />
                  <span className="text-center">
                    complete your account setup.
                  </span>
                </p>
                <button className="homepageBtn mt-1">
                  <Link
                    to="/blog"
                    className="t text-decoration-none"
                    style={{ color: "#02646d" }}
                  >
                    Continue to homepage
                  </Link>
                </button>
              </div>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Formik>
  );
};
