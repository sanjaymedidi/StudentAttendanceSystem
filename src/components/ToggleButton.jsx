import React from "react";
import "../styles/ToggleButton.css";

const ToggleButton = ({ isPresent, onToggle }) => {
  return (
    <button
      className={isPresent ? "present" : "absent"}
      onClick={onToggle}
    >
      {isPresent ? "Present" : "Absent"}
    </button>
  );
};

export default ToggleButton;
