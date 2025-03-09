import React from "react";
import "../styles/ExplanationSection.css";

const ExplanationSection = () => {
  return (
    <div className="explanation-container">
      <div className="large-black-box">
        <h1 className="box-heading">How we come to this?</h1>
        <p className="box-subtext">
          We observed and researched for three years in a variety of students.
          The best need more attention to excel, while struggling students need
          extra support to improve their own abilities. Every student requires
          personal attention. Based on the concept of “Personal Attention,” we
          built our algorithm and AI tutor to cater to each child uniquely…
        </p>
        <h5 className="box-link">Read the full story →</h5>
      </div>
    </div>
  );
};

export default ExplanationSection;
