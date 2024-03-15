import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./components/items/steps";
import Spinner from "./components/items/utilities/Spinner";
import AcademicTypes from "./components/items/academicTypes";
function App() {
  const { isLoading } = useSelector((state) => state.academic);
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <>
      <ToastContainer />
      {isLoading && <Spinner />}

      <div className="mainContainer">
        <Steps stepNumber={stepNumber} />
        <AcademicTypes setStepNumber={setStepNumber} />
      </div>
    </>
  );
}

export default App;
