import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, titleNo }) => {
  return (
    <h2 className="section-title">
      <span className="section-title__number">{titleNo}</span>
      {title}
      <span className="section-title__underline"></span>
    </h2>
  );
};

export default SectionTitle;
