import React, { useState } from "react";
import "./Welcome.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import arrayWelcome from "./arrayWelcome";

const Welcome = () => {
  const [isRead, setIsRead] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = arrayWelcome.length;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const newArray = arrayWelcome.slice(indexFirstItem, indexLastItem);

  const handleLeft = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleRight = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="welcome-container">
      <h2 className="heading">Welcome To Ori Lawyers </h2>
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
          <FaAngleLeft onClick={handleLeft} />
        </button>
        <button className="btn btn-right">
          <FaAngleRight onClick={handleRight} />
        </button>
      </div>
      <div className="cards-container">
        <div className="subcards-container">
          {newArray.map((element) => {
            const { id, heading, text, icon } = element;
            return (
              <div key={id} className="card">
                <div className="left">
                  <span className="icon">{icon}</span>
                </div>
                <div className="right">
                  <h3>{heading}</h3>
                  <span className="span1">
                    {isRead ? `${text}   ` : `${text.substring(0, 90)}...  `}
                  </span>
                  <span className="span2" onClick={() => setIsRead(!isRead)}>
                    {isRead ? "Read Less" : "Read More"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
