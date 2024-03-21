import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./components/items/steps";
import Spinner from "./components/items/utilities/Spinner";
import ClearanceTypes from "./components/items/clearanceTypes";
import AddClearance from "./components/items/addClearance";
import DefineRules from "./components/items/defineRules";
function App() {
  const { isLoading } = useSelector((state) => state.clearance);
  const [stepNumber, setStepNumber] = useState(3);

  return (
    <>
      <ToastContainer theme="dark" />
      {isLoading && <Spinner />}

      <div className="mainContainer">
        <Steps stepNumber={stepNumber} />
        {stepNumber === 1 && <ClearanceTypes setStepNumber={setStepNumber} />}
        {stepNumber === 2 && <AddClearance setStepNumber={setStepNumber} />}
        {stepNumber === 3 && <DefineRules />}
      </div>
    </>
  );
}

export default App;
