import { useState, useEffect } from "react";
import "./styles/definerules.css";
import { getClearanceTypes } from "../../features/academicType/clearanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const DefineRules = () => {
  const dispatch = useDispatch();
  const { message, isSuccess } = useSelector((state) => state.clearance);
  const [Clearances, setClearances] = useState([]);
  const [draggedFrom, setDraggedFrom] = useState("");
  const handleDragStart = (index, takenFrom) => (event) => {
    event.dataTransfer.setData("index", index);
    setDraggedFrom(takenFrom);
  };

  const handleDrop = (event, target) => {
    if (target !== draggedFrom) {
      toast.error("Can't perform action!");
      return;
    }
    const draggedDiv = event.dataTransfer.getData("index");
    const droppedDiv = event.target.getAttribute("data-index");
    if (draggedDiv !== droppedDiv) {
      let newClearances = Clearances.map((clearance) => {
        if (clearance.AcademicName === target) {
          let newClearanceDetail = [...clearance.ClearanceDetail];
          newClearanceDetail.splice(draggedDiv, 1);
          newClearanceDetail.splice(
            droppedDiv,
            0,
            clearance.ClearanceDetail[draggedDiv]
          );
          return { ...clearance, ClearanceDetail: newClearanceDetail };
        } else {
          return clearance;
        }
      });
      setClearances(newClearances);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setClearances(message);
    }
  }, [isSuccess, message]);
  useEffect(() => {
    dispatch(getClearanceTypes());
  }, [dispatch]);
  return (
    <>
      {" "}
      <div className="addClearanceContainer">
        {Clearances &&
          Clearances.map((AcademicNames, index) => (
            <div className="clearance col-l-4 " key={index}>
              <h3 className="addClearanceHeaderText">
                Define for {AcademicNames.AcademicName} clearance
              </h3>
              <label className="reorderclearance"> Reorder Clearance</label>
              <div className="clearancetypesContainer">
                {AcademicNames.ClearanceDetail.map((content, index) => (
                  <div
                    className="clearanceType draggable col-s-4 col-l-5 col-xl-3"
                    key={index}
                    data-index={index}
                    draggable={true}
                    onDragStart={handleDragStart(
                      index,
                      AcademicNames.AcademicName
                    )}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(event) =>
                      handleDrop(event, AcademicNames.AcademicName)
                    }
                  >
                    {" "}
                    {content.ClearanceFieldName}{" "}
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
