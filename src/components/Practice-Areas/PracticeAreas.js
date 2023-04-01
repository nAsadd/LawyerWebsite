import React from "react";
import "./PracticeAreas.css";
import arrayPracticeAreas from "./arrayPracticeAreas";

const PracticeAreas = () => {
  return (
    <div className="practice-areas-container">
      <div className="practice-areas-sub-container">
        <h2 className="heading">Ori Lawyer Practice Areas</h2>
        <div className="underline-container">
          <div className="underline"></div>
          <div className="underline2"></div>
        </div>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          accusantium, recusandae quasi voluptatum mollitia impedit accusamus
          fugit reiciendis quos consequuntur.
        </p>
        <div className="cards-container">
          <div className="subcards-container">
            {arrayPracticeAreas.map((element) => {
              const { id, text, icon } = element;
              return (
                <div key={id} className="card">
                  <span className="icon">{icon}</span>
                  <h3 className="h3">{text}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
