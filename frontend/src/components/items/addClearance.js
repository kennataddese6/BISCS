import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicTypes } from "../../features/academicType/academicSlice";
import "./styles/addclearance.css";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const AddClearance = () => {
  const dispatch = useDispatch();
  const [clearanceNames, setClearanceNames] =
    useState(/* [
    {
      clearancefor: "Regular",
      clearance: ["Dorm", "Cafe", "Departement"],
    },
    {
      clearancefor: "Extension",
      clearance: ["Departement"],
    },
    {
      clearancefor: "Weekend",
      clearance: ["Cafe", "Departement"],
    },
  ] */);

  const { isError, isSuccess, message } = useSelector(
    (state) => state.academic
  );
  const handleRemoveAcademic = (value, identifier) => {
    const newclearancName = clearanceNames.map((clearanceName) =>
      clearanceName.clearancefor === identifier
        ? {
            ...clearanceName,
            clearance: clearanceName.clearance.filter((a) => a !== value),
          }
        : clearanceName
    );
    setClearanceNames(newclearancName);
  };
  useEffect(() => {
    dispatch(getAcademicTypes());
  }, [dispatch]);
  useEffect(() => {
    if (isSuccess) {
      const initialClearance = message.map((acadamicNames) => {
        const data = {
          clearance: ["Dormitory", "Cafe"],
          clearancefor: acadamicNames.AcademicName,
        };
        return data;
      });
      setClearanceNames(initialClearance);
    }
  }, [isSuccess, isError, message]);

  return (
    <>
      <div className="addClearanceContainer">
        {message &&
          message.map((AcademicNames, index) => (
            <div key={index} className="clearance col-l-4 ">
              <h3 className="addClearanceHeaderText">
                Add clearance for {AcademicNames.AcademicName}
              </h3>
              <div className="clearancetypesContainer">
                {clearanceNames &&
                  clearanceNames.map((clearanceName) => (
                    <>
                      {clearanceName.clearancefor === AcademicNames.AcademicName
                        ? clearanceName.clearance.map((oneClearance, index) => (
                            <div
                              key={index}
                              className="clearanceType col-s-4  col-xl-3"
                            >
                              <div className="academicTypeText">
                                {oneClearance}
                              </div>
                              <div
                                className="closeIconContainer"
                                onClick={() => {
                                  handleRemoveAcademic(
                                    oneClearance,
                                    clearanceName.clearancefor
                                  );
                                }}
                              >
                                <MdClose />
                              </div>
                            </div>
                          ))
                        : ""}
                    </>
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
