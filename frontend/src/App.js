import "./App.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function App() {
  const [academicNames, setAcademicNames] = useState([]);
  const [academicTypes, setAcademicTypes] = useState(["Regular", "Extension"]);
  const [customAcademic, setCustomAcademic] = useState("");

  const handleDropDownChange = (value) => {
    if (!value) {
      //If there is no value return/exit
      return;
    }
    const duplicateValue = academicNames.find((a) => a === value);
    if (duplicateValue) {
      //If teh value is already there exit
      return;
    }
    setAcademicNames([...academicNames, value]);
  };
  const handleRemoveAcademic = (value) => {
    const newAcademicName = academicNames.filter((a) => a !== value);
    setAcademicNames(newAcademicName);
  };
  const handleAddCustomAcademic = () => {
    if (!customAcademic) {
      //If there is no value return/exit
      return;
    }
    const duplicateValue = academicTypes.find((a) => a === customAcademic);
    if (duplicateValue) {
      //If teh value is already there exit
      return;
    }
    setAcademicTypes([...academicTypes, customAcademic]);
    setCustomAcademic("");
  };
  return (
    <>
      <div className="stepContainer">
        <div className="subStepContainer">
          <div className="stepCircle"> 1 </div>
          <div className="stepText"> Academic </div>
        </div>
        <div className="stepLine col-s-1 col-l-1 col-m-1"> </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 2 </div>
          <div className="stepText inactiveText"> Clearance </div>
        </div>
        <div className="stepLine inactiveStep col-s-1 col-l-1 col-m-1"> </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep "> 3 </div>
          <div className="stepText inactiveText"> Define rule </div>
        </div>
        <div className="stepLine inactiveStep col-s-1 col-l-1 col-m-1"> </div>
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
            <div
              className="closeIconContainer"
              onClick={() => {
                handleRemoveAcademic(academicName);
              }}
            >
              <MdClose />
            </div>
          </div>
        ))}
      </div>
      <select
        className="academictypesContainer dropDown"
        onChange={(e) => {
          handleDropDownChange(e.target.value);
        }}
      >
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
        value={customAcademic}
        onChange={(e) => {
          setCustomAcademic(e.target.value);
        }}
      />
      <button
        className=" addCustomAcademicTypeButton"
        onClick={() => {
          handleAddCustomAcademic();
        }}
      >
        Add Custom
      </button>
    </>
  );
}

export default App;
