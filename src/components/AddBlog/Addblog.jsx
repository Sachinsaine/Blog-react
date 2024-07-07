/* eslint-disable no-unused-vars */
import React from "react";
import "./addblog.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

export const Addblog = () => {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        blogId: "",
        title: "",
        image: "",
        description: "",
        update: "",
      }}
      validationSchema={Yup.object({
        blogId: Yup.number().required("*Blog Id is required"),
        title: Yup.string().required("*This field is required"),
        image: Yup.string().required("*This field is required"),
        description: Yup.string().required("*Description is required").min(50),
        update: Yup.string().required("*This field is required"),
      })}
      onSubmit={async (values, action) => {
        try {
          await axios.post("http://127.0.0.1:2001/addblog", values);
          action.resetForm();
          navigate("/blog");
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <div style={{ background: "#02646d", height: "100vh" }}>
        <div className="addblog-container">
          <h3 className="text-center text-white pt-3">Add a Blog Post</h3>
          <div className="form">
            <Form className="login-form">
              <div className="my-3">
                <Field
                  type="number"
                  placeholder="Enter Blog Id"
                  className="rounded-sm w-full"
                  name="blogId"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="title" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Enter title"
                  className="rounded-sm "
                  name="title"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="title" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Image url"
                  className="rounded-sm"
                  name="image"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="image" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Enter description"
                  className="rounded-sm "
                  name="description"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="description" />
                </small>
              </div>
              <div className="my-3">
                <Field
                  type="text"
                  placeholder="Enter update date"
                  className="rounded-sm"
                  name="update"
                />
                <small className="text-red-500 text-sm fw-bold">
                  <ErrorMessage name="update" />
                </small>
              </div>
              <button type="submit" className="rounded-sm hover:underline">
                add blog
              </button>
              <button type="button" className="rounded-sm my-2">
                <Link
                  className="text-white uppercase no-underline hover:underline"
                  to="/"
                >
                  cancel
                </Link>
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};
