import React from "react";
import "../styles/testimonialcard.css";

const Testimonialcard = (props) => {
  return (
    <div
      className="testimonial-card"
      style={{
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        margin: "20px 20px 20px 20px",
      }}
    >
      <div className="testimonial-header" style={{ display: "flex", alignItems: "center" }}>
        <img className="photo" src={props.image} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="name">{props.name}</span>
          <span className="position">{props.position}</span>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
};

export default Testimonialcard;
