import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  array,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
}) => {
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const newArray = array.slice(indexFirstItem, indexLastItem);

  return (
    <>
      {newArray.map((element) => {
        const { id, heading, law, image, text } = element;
        return (
          <div className="card" key={id}>
            <div className="card-image">
              <img src={image} alt="Not Available" />
              <div className="overlay">
                <button className="icon-btn">
                  <FaGithub />
                </button>
                <button className="icon-btn">
                  <FaFacebookF />
                </button>
                <button className="icon-btn">
                  <FaTwitter />
                </button>
                <button className="icon-btn">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <div className="card-text">
              <h3>{heading}</h3>
              <h4>{law}</h4>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
