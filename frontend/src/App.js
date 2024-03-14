import "./App.css";
import { MdClose } from "react-icons/md";
function App() {
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
        <div className="academicType col-s-3">
          <div className="academicTypeText">Regular</div>
          <div className="closeIconContainer">
            <MdClose />
          </div>
        </div>
        <div className="academicType col-s-3">
          <div className="academicTypeText ">Extension</div>
          <div className="closeIconContainer">
            <MdClose />
          </div>
        </div>
        <div className="academicType col-s-3">
          <div className="academicTypeText">Weekend</div>
          <div className="closeIconContainer">
            <MdClose />
          </div>
        </div>
        <div className="academicType col-s-3">
          <div className="academicTypeText">Shift</div>
          <div className="closeIconContainer">
            <MdClose />
          </div>
        </div>
        <div className="academicType col-s-3">
          <div className="academicTypeText">Masters</div>
          <div className="closeIconContainer">
            <MdClose />
          </div>
        </div>
      </div>
      <select className="academictypesContainer dropDown">
        <option> Regular </option>
        <option> Extension </option>
        <option> Weekend </option>
        <option> Summer </option>
      </select>
    </>
  );
}

export default App;
