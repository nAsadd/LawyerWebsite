import React, { useState } from "react";
import "./PlansPrices.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import arrayPlanPrices from "./arrayPlanPrices";

const PlansPrices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = arrayPlanPrices.length;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const newArray = arrayPlanPrices.slice(indexFirstItem, indexLastItem);

  const handleLeft = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleRight = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="plans-prices-container">
      <h2 className="heading">Great Plans & Incredible Prices </h2>
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
            const { id, price, plan, features } = element;
            return (
              <div key={id} className="card">
                <div className="top">
                  <div className="spans">
                    <span className="span sp1">$</span>
                    <span className="span sp2">{price}</span>
                    <span className="span sp3">per month</span>
                  </div>
                  <h3 className="hh3">{plan}</h3>
                  <button className="btn">Order It</button>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  {features.map((feature) => {
                    const { id, property, size } = feature;
                    return (
                      <div key={id} className="attributes">
                        <span className="s1">{property}</span>
                        <span className="s2">{size}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlansPrices;
