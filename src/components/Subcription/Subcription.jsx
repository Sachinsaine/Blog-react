/* eslint-disable no-unused-vars */
import React from "react";
import "./subcription.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Subcription = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("*Username is required")
          .min(4, "*Name must be at least 4 characters"),
        email: Yup.string()
          .required("*Email is required")
          .email("*Invalid Email"),
      })}
      onSubmit={async (values, action) => {
        try {
          await axios.post("http://127.0.0.1:2001/addSubcriber", values);
          action.resetForm();
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <div className="container">
        <div className="subcription-container p-10 rounded-md">
          <h1 className="text-center uppercase">Subscription Form</h1>
          <p className="text-center text-sm">
            A subscription box is a collection of tangible items that <br /> are
            given to clients on a regular basis in boxes. The major types of
            subscription <br /> boxes are replenishment subscriptions, curation
            subscriptions, and access subscriptions.
          </p>
          <Form>
            <div className="flex justify-between items-center gap-4">
              <Field
                className="field"
                type="text"
                name="username"
                placeholder="Enter Name"
              />

              <Field
                className="field"
                type="email"
                name="email"
                placeholder="Enter Email"
              />

              <button
                className="py-2.5 px-5 uppercase rounded-sm text-white fw-bold"
                style={{ background: "#02646d" }}
              >
                Subscribe
              </button>
            </div>
            <div className="text-center flex justify-start items-center gap-72">
              <small className="text-red-500 fw-bold mt-2" id="nameErr">
                <ErrorMessage name="username" />
              </small>
              <small className="text-red-500 fw-bold mt-2" id="emailErr">
                <ErrorMessage name="email" />
              </small>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
