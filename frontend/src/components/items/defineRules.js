import { useState, useEffect } from "react";
import "./styles/definerules.css";
import { getClearanceTypes } from "../../features/academicType/clearanceSlice";
import { useDispatch, useSelector } from "react-redux";
const DefineRules = () => {
  const dispatch = useDispatch();
  const { message, isSuccess } = useSelector((state) => state.clearance);
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
  useEffect(() => {
    if (isSuccess) {
      console.log(message);
    }
  }, [isSuccess, message]);
  useEffect(() => {
    dispatch(getClearanceTypes());
  }, [dispatch]);
  return (
    <>
      {" "}
      <div className="addClearanceContainer">
        {message &&
          message.map((AcademicNames, index) => (
            <div className="clearance col-l-4 ">
              <h3 className="addClearanceHeaderText">
                Define for {AcademicNames.AcademicName} clearance
              </h3>
              <label className="reorderclearance"> Reorder Clearance</label>
              <div className="clearancetypesContainer">
                {Divs.map((content, index) => (
                  <div
                    className="academicType draggable col-s-3"
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
            </div>
          ))}
        <div className="nextButtonContainer"></div>
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Next </button>
      </div>
    </>
  );
};

export default DefineRules;
