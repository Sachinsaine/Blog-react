/* eslint-disable no-unused-vars */
import React from "react";
import "./blog.scss";
import { Card } from "../Card/Card";
import { Subcription } from "../Subcription/Subcription";
import { Latest } from "../Latestblogs/Latest";

export const Blogpage = () => {
  return (
    <div className="blog-container">
      <div className="blog py-5">
        <div className="container">
          <div className="p-3">
            <h2 className="text-white text-center fw-bold">Featured Posts</h2>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <Card />
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-center fw-bold">Latest Posts</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className="container flex flex-wrap justify-between items-center my-5">
            <Latest />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Latest />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Subcription />
    </div>
  );
};
