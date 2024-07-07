/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./latest.scss";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Latest = () => {
  const [latest, setLatest] = useState([]);
  let navigate = useNavigate();

  const handleEdit = (blogId) => {
    navigate(`/editblog/${blogId}`);
  };

  // const hanldeDelete = async (blogId) => {
  //   try {
  //     const confirmed = window.confirm(
  //       "Are you sure you want to delete this blog?"
  //     );
  //     if (confirmed) {
  //       await axios.delete(`http://127.0.0.1:2001/deleteblog/${blogId}`);
  //       toast.success("Blog has been deleted successfully");
  //       axios
  //         .get("http://127.0.0.1:2001/blogs")
  //         .then((res) => setLatest(res.data))
  //         .catch((err) => console.log(err));
  //     }
  //   } catch (error) {
  //     console.error("Error deleting blog:", error);
  //     toast.error("Failed to delete blog");
  //   }
  // };

  const hanldeDelete = async (blogId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (confirmed) {
        await axios.delete(`http://127.0.0.1:2001/deleteblog/${blogId}`);
        toast.success("Blog has been deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:2001/blogs")
      .then((res) => setLatest(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="card-container">
        {latest.map((item, index) => (
          <div className="card mb-5" key={index}>
            <img src={item.image} alt="" className="card-img-top" />
            <div className="flex deleEditBtn">
              <Link to={`/editblog/${item.blogId}`} className="text-white">
                <MdModeEdit
                  onClick={() => handleEdit(item.blogId)}
                  className="rounded-full  cursor-pointer text-3xl p-1 bgEdit"
                />
              </Link>
              <MdDelete
                onClick={() => hanldeDelete(item.blogId)}
                className="rounded-full cursor-pointer text-3xl p-1 bgDel"
              />
            </div>
            <div className="card-body">
              <small className="bg-light text-danger text-center me-3 px-1">
                Design
              </small>
              <small className="bg-light text-success text-center me-3 px-1">
                Featured
              </small>
              <small className="bg-light text-info text-center me-3 px-1">
                Views - 100,256
              </small>
              <h5 className="mt-1">{item.title}</h5>
              <small>{item.description}</small> <br />
              <small className="bg-light text-warning text-center me-3 px-1">
                {item.update}
              </small>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
