/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

export const EditBlog = () => {
  const [blog, setBlog] = useState([
    { blogId: "", title: "", image: "", description: "", update: "" },
  ]);
  let params = useParams();
  let navigate = useNavigate();

  const getBlogDetails = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:2001/blogs/${params.id}`
      );
      setBlog(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [params.id]);

  return (
    <Formik
      className="edit-container"
      initialValues={{
        blogId: blog[0].blogId,
        title: blog[0].title,
        image: blog[0].image,
        description: blog[0].description,
        update: blog[0].update,
      }}
      validationSchema={Yup.object({
        blogId: Yup.number().required("*Blog  ID is required"),
        title: Yup.string().required("*This field is required"),
        image: Yup.string().required("*This field is required"),
        description: Yup.string().required("*Description is required").min(50),
        update: Yup.string().required("*This field is required"),
      })}
      onSubmit={async (values, actions) => {
        try {
          await axios.put(
            `http://127.0.0.1:2001/editblog/${params.id}`,
            values
          );
          toast.success("Blog updated successfully!");
          actions.resetForm();
          navigate("/blog");
        } catch (err) {
          console.log(err);
          toast.error("Failed to update blog.");
        }
      }}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => {
        const handleTextChange = (fieldName, newValue) => {
          setFieldValue(fieldName, newValue);
        };

        return (
          <>
            <div style={{ background: "#02646d", height: "100vh" }}>
              <div className="edit-container">
                <h3 className="text-center text-white pt-3">Modify The Blog</h3>
                <div className="form">
                  <Form className="login-form">
                    <div className="my-3">
                      <Field
                        type="number"
                        placeholder="Enter title"
                        className="rounded-sm"
                        name="blogId"
                        onChange={(e) =>
                          handleTextChange("blogId", e.target.value)
                        }
                      />
                      <small className="text-red-500 text-sm fw-bold">
                        <ErrorMessage name="blogId" />
                      </small>
                    </div>
                    <div className="my-3">
                      <Field
                        type="text"
                        placeholder="Enter title"
                        className="rounded-sm "
                        name="title"
                        onChange={(e) =>
                          handleTextChange("title", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleTextChange("image", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleTextChange("description", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleTextChange("update", e.target.value)
                        }
                      />
                      <small className="text-red-500 text-sm fw-bold">
                        <ErrorMessage name="update" />
                      </small>
                    </div>
                    <button
                      type="submit"
                      className="rounded-sm hover:underline"
                    >
                      Update
                    </button>
                    <button type="button" className="rounded-sm my-2">
                      <Link
                        className="text-white uppercase no-underline hover:underline"
                        to="/blog"
                      >
                        cancel
                      </Link>
                    </button>
                  </Form>
                </div>
              </div>
            </div>
            <ToastContainer />
          </>
        );
      }}
    </Formik>
  );
};
