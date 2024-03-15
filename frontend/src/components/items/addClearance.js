import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicTypes } from "../../features/academicType/academicSlice";

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
      <div style={{ color: "white" }}>
        Add Clearance for this academic types
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Next </button>
      </div>
    </>
  );
};

export default AddClearance;
