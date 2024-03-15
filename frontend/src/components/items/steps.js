const Steps = () => {
  return (
    <div className="stepContainer">
      <div className="subStepContainer">
        <div className="stepCircle"> 1 </div>
        <div className="stepText"> Academic </div>
      </div>
      <div className="stepLine col-s-1 col-l-1 col-m-1"> </div>
      <div className="subStepContainer">
        <div className="stepCircle inactiveStep"> 2 </div>
        <div className="stepText inactiveText"> Clearance </div>
      </div>
      <div className="stepLine inactiveStep col-s-1 col-l-1 col-m-1"> </div>
      <div className="subStepContainer">
        <div className="stepCircle inactiveStep "> 3 </div>
        <div className="stepText inactiveText"> Define rule </div>
      </div>
      <div className="stepLine inactiveStep col-s-1 col-l-1 col-m-1"> </div>
      <div className="subStepContainer">
        <div className="stepCircle inactiveStep"> 4 </div>
        <div className="stepText inactiveText"> Complete </div>
      </div>
    </div>
  );
};

export default Steps;
