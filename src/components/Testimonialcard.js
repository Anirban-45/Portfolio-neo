import React from "react";

const Testimonialcard = (props) => {
  return (
    <div
      className="testimonial-card"
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <div className="testimonial-header" style={{ display: "flex" }}>
        <img src={props.image} alt="" />
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
