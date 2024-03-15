import "./App.css";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAcademicType } from "./features/academicType/academicSlice";
import Steps from "./components/items/steps";
import Spinner from "./components/items/utilities/Spinner";
function App() {
  const dispatch = useDispatch();
  const [academicNames, setAcademicNames] = useState([]);
  const [academicTypes, setAcademicTypes] = useState(["Regular", "Extension"]);
  const [customAcademic, setCustomAcademic] = useState("");
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.academic
  );
  const [stepNumber, setStepNumber] = useState(1);
  useEffect(() => {
    if (isSuccess) {
      setStepNumber((prevNumber) => prevNumber + 1);
    }
  }, [isLoading, isError, isSuccess]);
  const handleDropDownChange = (value) => {
    if (!value) {
      //If there is no value return/exit
      return;
    }
    const duplicateValue = academicNames.find((a) => a === value);
    if (duplicateValue) {
      //If teh value is already there exit
      toast.error(`${value} already added`);
      return;
    }
    setAcademicNames([...academicNames, value]);
  };
  const handleRemoveAcademic = (value) => {
    const newAcademicName = academicNames.filter((a) => a !== value);
    setAcademicNames(newAcademicName);
  };
  const handleAddCustomAcademic = () => {
    if (!customAcademic) {
      //If there is no value return/exit
      return;
    }
    const duplicateValue = academicTypes.find((a) => a === customAcademic);
    if (duplicateValue) {
      //If teh value is already there exit
      toast.error(`${customAcademic} already added`);

      return;
    }
    setAcademicTypes([...academicTypes, customAcademic]);
    setCustomAcademic("");
    toast.success("Custom academic type added!");
  };
  const handleSubmit = () => {
    if (!academicNames.length) {
      toast.error("Please add academic types");
      return;
    }
    dispatch(createAcademicType(academicNames));
  };
  return (
    <>
      <ToastContainer />
      {isLoading && <Spinner />}

      <div className="mainContainer">
        <Steps stepNumber={stepNumber} />
        <div className="academicContainer">
          <h1 className="stepOneHeaderText"> Add Academic type</h1>
          <div className="academictypesContainer">
            {academicNames.map((academicName, index) => (
              <div key={index} className="academicType col-s-3">
                <div className="academicTypeText">{academicName}</div>
                <div
                  className="closeIconContainer"
                  onClick={() => {
                    handleRemoveAcademic(academicName);
                  }}
                >
                  <MdClose />
                </div>
              </div>
            ))}
          </div>
          <select
            className="academictypesContainer dropDown"
            onChange={(e) => {
              handleDropDownChange(e.target.value);
            }}
          >
            <option value=""> Choose an academic type </option>
            {academicTypes.map((academicType, index) => (
              <option key={index} value={academicType}>
                {" "}
                {academicType}{" "}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="customInput"
            placeholder="Custom academic type"
            className="academictypesContainer customAcademicTypeInput"
            value={customAcademic}
            onChange={(e) => {
              setCustomAcademic(e.target.value);
            }}
          />
          <button
            className=" addCustomAcademicTypeButton"
            onClick={() => {
              handleAddCustomAcademic();
            }}
          >
            Add Custom
          </button>
        </div>
        <div className="nextButtonContainer">
          <button
            className="nextStepButton"
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
