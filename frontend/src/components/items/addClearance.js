import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicTypes } from "../../features/academicType/academicSlice";
import "./styles/addclearance.css";
const AddClearance = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message } = useSelector(
    (state) => state.academic
  );
  useEffect(() => {
    dispatch(getAcademicTypes());
  }, [dispatch]);
  useEffect(() => {
    console.log(isError, isSuccess, message);
  }, [isSuccess, isError, message]);
  return (
    <>
      <div className="addClearanceContainer">
        <div className="clearance col-l-4">Container 1</div>
        <div className="clearance col-l-4">Container 2</div>
        <div className="clearance col-l-4">Container 3</div>
        <div className="clearance col-l-4">Container 4</div>
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Next </button>
      </div>
    </>
  );
};

export default AddClearance;
