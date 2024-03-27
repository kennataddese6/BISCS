import "../items/styles/initiateclearance.css";
const InitiateClearance = () => {
  return (
    <>
      <h1 className="initateClearanceHeader">Initiate Clearance</h1>
      <div className="initateClearanceContainer col-m-8">
        <div className="initiationClearances col-s-5 col-l-3"></div>
        <div className="initiationClearances col-s-5 col-l-3"></div>
        <div className="initiationClearances col-s-5 col-l-3"></div>
        <div className="initiationClearances col-s-5 col-l-3"></div>
        <div className="initiationClearances col-s-5 col-l-3">Student</div>
        <div className="initiationClearances col-s-5 col-l-3">All</div>
      </div>
    </>
  );
};
export default InitiateClearance;
