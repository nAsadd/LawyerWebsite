import React, { useState } from "react";
import "./Lawyers.css";
import array from "./array";
import Pagination from "../Pagination";
import {
  FaAngleRight,
  FaAngleLeft,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Lawyers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = array.length;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="lawyers-container">
      <h2 className="heading">Meet Our Lawyers </h2>
      <div className="underline-container">
        <div className="underline"></div>
        <div className="underline2"></div>
      </div>
      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        accusantium, recusandae quasi voluptatum mollitia impedit accusamus
        fugit reiciendis quos consequuntur.
      </p>
      <div className="btns-container">
        <button className="btn btn-left">
          <FaAngleLeft onClick={handlePrev} />
        </button>
        <button className="btn btn-right">
          <FaAngleRight onClick={handleNext} />
        </button>
      </div>
      <div className="cards-container">
        <div className="subcards-container">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            array={array}
            FaGithub={FaGithub}
            FaFacebookF={FaFacebookF}
            FaTwitter={FaTwitter}
            FaLinkedinIn={FaLinkedinIn}
          />
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
