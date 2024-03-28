import "../items/styles/initiateclearance.css";
import { getClearanceTypes } from "../../features/academicType/clearanceSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
const InitiateClearance = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.clearance);
  const [choosenClearance, setchoosenClearance] = useState("");
  useEffect(() => {
    dispatch(getClearanceTypes());
  }, [dispatch]);
  return (
    <>
      <h1 className="initateClearanceHeader">Initiate Clearance</h1>
      <div className="initateClearanceContainer col-m-8">
        {message &&
          message.map((clearance) => (
            <div
              className="initiationClearances col-s-5 col-l-3"
              onClick={() => setchoosenClearance(clearance.AcademicName)}
            >
              {clearance.AcademicName}
            </div>
          ))}
        <div
          className="initiationClearances col-s-5 col-l-3"
          onClick={() => setchoosenClearance("Student")}
        >
          Student
        </div>
        <div
          className="initiationClearances col-s-5 col-l-3"
          onClick={() => setchoosenClearance("All")}
        >
          All
        </div>
      </div>
      {choosenClearance && (
        <div className="popupContainer">
          <div className="popup col-m-8 col-l-6 col-xl-4">
            <div
              className="closeIconContainer"
              onClick={() => setchoosenClearance("")}
            >
              <MdClose />
            </div>
            <div className="centerText">
              {" "}
              Initiate clearance for {choosenClearance}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default InitiateClearance;
