import "./App.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function App() {
  const [academicNames, setAcademicNames] = useState([
    "Regular",
    "Extension",
    "Weekend",
    "Shift",
    "Masters",
  ]);
  const [academicTypes, setAcademicTypes] = useState([
    "Regular",
    "Extension",
    "Weekend",
    "Shift",
    "Masters",
  ]);
  return (
    <>
      <div className="stepContainer">
        <div className="subStepContainer">
          <div className="stepCircle"> 1 </div>
          <div className="stepText"> Academic </div>
        </div>
        <div className="stepLine col-s-3 col-l-1"> </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 2 </div>
          <div className="stepText inactiveText"> Clearance </div>
        </div>
        <div className="stepLine inactiveStep col-s-3 col-l-1"> </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep "> 3 </div>
          <div className="stepText inactiveText"> Define rule </div>
        </div>
        <div className="stepLine inactiveStep col-s-3 col-l-1"> </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 4 </div>
          <div className="stepText inactiveText"> Complete </div>
        </div>
      </div>
      <h1 className="stepOneHeaderText"> Add Academic type</h1>
      <div className="academictypesContainer">
        {academicNames.map((academicName, index) => (
          <div key={index} className="academicType col-s-3">
            <div className="academicTypeText">{academicName}</div>
            <div className="closeIconContainer">
              <MdClose />
            </div>
          </div>
        ))}
      </div>
      <select className="academictypesContainer dropDown">
        <option value=""> Choose an academic type </option>
        {academicTypes.map((academicType, index) => (
          <option key={index} value={academicType}>
            {" "}
            {academicType}{" "}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="customInput"
        placeholder="Custom academic type"
        className="academictypesContainer customAcademicTypeInput"
      />
      <button className=" addCustomAcademicTypeButton">Add Custom</button>
    </>
  );
}

export default App;
