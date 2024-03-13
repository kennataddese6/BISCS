import "./App.css";
function App() {
  return (
    <>
      <div className="stepContainer">
        <div className="subStepContainer">
          <div className="stepCircle"> 1 </div>
          <div className="stepText"> Academic </div>
          <div className="stepLine"> </div>
        </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 2 </div>
          <div className="stepText inactiveText"> Clearance </div>
          <div className="stepLine inactiveStep"> </div>
        </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 3 </div>
          <div className="stepText inactiveText"> Define rule </div>
          <div className="stepLine inactiveStep"> </div>
        </div>
        <div className="subStepContainer">
          <div className="stepCircle inactiveStep"> 4 </div>
          <div className="stepText inactiveText"> Complete </div>
        </div>
      </div>
      <h1 className="stepOneHeaderText"> Add Academic type</h1>
      <div className="academictypesContainer"> </div>
    </>
  );
}

export default App;
