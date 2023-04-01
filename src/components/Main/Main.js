import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="sub-main-container">
        <h1>Why Law Academy ?</h1>
        <h2>Awesome Theme For Lawyers Websites</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nihil?
          Error ea corrupti accusamus. Aperiam ducimus quibusdam perspiciatis
          quam numquam nulla qui minima fugit. Reiciendis provident cumque
          veritatis repellendus reprehenderit.
        </p>
        <button className="main-btn">Our Features</button>
      </div>
    </div>
  );
};

export default Main;
