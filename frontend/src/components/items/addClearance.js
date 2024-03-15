import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicTypes } from "../../features/academicType/academicSlice";
import "./styles/addclearance.css";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const AddClearance = () => {
  const dispatch = useDispatch();
  const [clearanceNames, setClearanceNames] = useState([
    "Dormitory",
    "Cafteria",
    "Finance",
    "Department",
  ]);
  const { isError, isSuccess, message } = useSelector(
    (state) => state.academic
  );
  const handleRemoveAcademic = (value) => {
    const newclearancName = clearanceNames.filter((a) => a !== value);
    setClearanceNames(newclearancName);
  };
  useEffect(() => {
    dispatch(getAcademicTypes());
  }, [dispatch]);
  useEffect(() => {
    console.log(isError, isSuccess, message);
  }, [isSuccess, isError, message]);
  return (
    <>
      <div className="addClearanceContainer">
        {message &&
          message.map((AcademicNames) => (
            <div className="clearance col-l-4 ">
              <h3 className="addClearanceHeaderText">
                Add clearance for {AcademicNames.AcademicName}
              </h3>
              <div className="clearancetypesContainer">
                {clearanceNames.map((clearanceName, index) => (
                  <div key={index} className="clearanceType col-s-4  col-xl-3">
                    <div className="academicTypeText">{clearanceName}</div>
                    <div
                      className="closeIconContainer"
                      onClick={() => {
                        handleRemoveAcademic(clearanceName);
                      }}
                    >
                      <MdClose />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Next </button>
      </div>
    </>
  );
};

export default AddClearance;
