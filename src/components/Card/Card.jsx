/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./card.scss";
import axios from "axios";
export const Card = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:2001/featuredtblogs")
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="card-container">
      {blog.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt="" className="card-img-top" />
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
              {item.updated}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};
