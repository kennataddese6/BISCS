import React, { useState } from "react";
import "./styles/definerules.css";

const DefineRules = () => {
  const [Divs, setDivs] = useState(["A", "B", "C", "D"]);

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDrop = (event) => {
    const draggedDiv = event.dataTransfer.getData("index");
    const droppedDiv = event.target.getAttribute("data-index");
    if (draggedDiv !== droppedDiv) {
      const newDiv = [...Divs];
      newDiv.splice(draggedDiv, 1);
      newDiv.splice(droppedDiv, 0, Divs[draggedDiv]);
      setDivs(newDiv);
    }
  };
  return (
    <div className="academicContainer">
      {Divs.map((content, index) => (
        <div
          className="academicType col-s-3"
          key={index}
          data-index={index}
          draggable={true}
          onDragStart={handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {" "}
          {content}{" "}
        </div>
      ))}
    </div>
  );
};

export default DefineRules;
