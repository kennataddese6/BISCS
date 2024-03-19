import "./styles/steps.css";
const Steps = ({ stepNumber }) => {
  return (
    <div className="stepContainer">
      <div className="subStepContainer">
        <div className="stepCircle"> 1 </div>
        <div className="stepText"> Academic </div>
      </div>
      <div className="stepLine col-s-1 col-l-1 col-m-1"> </div>
      <div className="subStepContainer">
        <div className={`stepCircle ${stepNumber < 2 && `inactiveStep`} `}>
          2
        </div>
        <div className={`stepText ${stepNumber < 2 && `inactiveText`} `}>
          {" "}
          Clearance{" "}
        </div>
      </div>
      <div
        className={`${
          stepNumber < 2
            ? `inactiveLine col-s-1 col-l-1 col-m-1`
            : `stepLine  col-s-1 col-l-1 col-m-1`
        }`}
      >
        {" "}
      </div>
      <div className="subStepContainer">
        <div className={`stepCircle ${stepNumber < 3 && `inactiveStep`} `}>
          {" "}
          3{" "}
        </div>
        <div className={`stepText ${stepNumber < 2 && `inactiveText`} `}>
          {" "}
          Define rule{" "}
        </div>
      </div>
      <div
        className={`${
          stepNumber < 3
            ? `inactiveLine col-s-1 col-l-1 col-m-1`
            : `stepLine  col-s-1 col-l-1 col-m-1`
        }`}
      >
        {" "}
      </div>
      <div className="subStepContainer">
        <div className="stepCircle inactiveStep"> 4 </div>
        <div className="stepText inactiveText"> Complete </div>
      </div>
    </div>
  );
};

export default Steps;
