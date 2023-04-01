import React, { useEffect, useState } from "react";
import "./AwesomeFeatures.css";
import arrayFeatures from "./arrayFeatures.js";

import Numbers from "./Numbers";
const AwesomeFeatures = () => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const triggerHeight = 800;

    if (scrollHeight > triggerHeight) {
      window.removeEventListener("scroll", handleScroll);
      setTrigger(true);
    }
  };

  return (
    <div className="awesome-features-container">
      <h2 className="heading">Law Academy & Awesome Features</h2>
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
          {arrayFeatures.map((element) => {
            const { id, numbers, text, icon } = element;
            return (
              <div key={id} className="card">
                <div className="icon-container icon">{icon}</div>
                {trigger && <Numbers numbers={numbers} />}
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AwesomeFeatures;
