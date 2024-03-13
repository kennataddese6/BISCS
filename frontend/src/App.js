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
          <div className="stepCircle"> 2 </div>
          <div className="stepText"> Clearance </div>
          <div className="stepLine"> </div>
        </div>
        <div className="subStepContainer">
          <div className="stepCircle"> 3 </div>
          <div className="stepText"> Define rule </div>
          <div className="stepLine"> </div>
        </div>
        <div className="subStepContainer">
          <div className="stepCircle"> 4 </div>
          <div className="stepText"> Complete </div>
        </div>
      </div>
    </>
  );
}

export default App;
