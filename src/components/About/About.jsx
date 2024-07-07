/* eslint-disable no-unused-vars */
import React from "react";
import "./About.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export const About = () => {
  return (
    <div className="aboutpage">
      <div className="flex justify-center flex-col items-center py-5 container">
        <p className="rounded-3xl px-3 py-1 text-center primaryCol secondaryCol cursor-pointer w-28">
          About us
        </p>
        <div className="text-6xl flex flex-col justify-center items-center my-3 fw-medium">
          <div className="m-1">The world’s destination</div>
          <div className="m-1">for creative</div>
        </div>
        <p>
          We’re on a mission to build the world’s best community for creatives
          to share, grow, and get hired.
        </p>
        <div className="my-5">
          <img
            className="roudend rounded-xl"
            src="https://framerusercontent.com/images/MSOY9fWwJ1EQeK4PRTFyHCPx4.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="text-center flex flex-wrap flex-col justify-center items-center">
          <h3 className="my-2 text-3xl">Join our team</h3>
          <p className="text-center">
            Since we are a 100% distributed team, you can work from anywhere. No
            need to move for a job. We are proud of a <br /> culture of
            communication, collaboration, trust and kindness.
          </p>

          <button className="talkBtn px-3 py-2 flex rounded-sm justify-center items-center">
            Lets talk <FaArrowRightLong className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
