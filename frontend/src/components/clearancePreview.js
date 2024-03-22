import { useState, useEffect } from "react";
import { getClearanceTypes } from "../features/academicType/clearanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
const ClearancePreview = () => {
  const { isSuccess, message } = useSelector((state) => state.clearance);
  const [Clearances, setClearance] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setClearance(message);
    }
  }, [isSuccess, message]);
  useEffect(() => {
    dispatch(getClearanceTypes());
  }, [dispatch]);
  return (
    <>
      <div className="addClearanceContainer">
        {Clearances &&
          Clearances.map((clearance, index) => (
            <div className="clearance col-l-4">
              <h3 className="addClearanceHeaderText">
                {" "}
                {clearance.AcademicName} Clearance
              </h3>
              <ol>
                {clearance.ClearanceDetail.map((detail) => (
                  <>
                    <li>
                      {detail.ClearanceFieldName}{" "}
                      {detail.StudentAppeal && (
                        <div className="studentAppealIconContainer">
                          <FaUser color="lightgreen" />
                        </div>
                      )}
                    </li>
                    {detail.PreRequest && (
                      <ul>
                        <li> {detail.PreRequestName} </li>
                      </ul>
                    )}
                  </>
                ))}
              </ol>
            </div>
          ))}
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Finish </button>
      </div>
    </>
  );
};

export default ClearancePreview;
