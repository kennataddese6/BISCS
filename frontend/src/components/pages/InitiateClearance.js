import "../items/styles/initiateclearance.css";
import { getClearanceTypes } from "../../features/academicType/clearanceSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const InitiateClearance = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.clearance);

  useEffect(() => {
    dispatch(getClearanceTypes());
  }, [dispatch]);
  return (
    <>
      <h1 className="initateClearanceHeader">Initiate Clearance</h1>
      <div className="initateClearanceContainer col-m-8">
        {message &&
          message.map((clearance) => (
            <div className="initiationClearances col-s-5 col-l-3">
              {clearance.AcademicName}
            </div>
          ))}
        <div className="initiationClearances col-s-5 col-l-3">Student</div>
        <div className="initiationClearances col-s-5 col-l-3">All</div>
      </div>
      <div className="popupContainer">
        <div className="popup"></div>
      </div>
    </>
  );
};
export default InitiateClearance;
