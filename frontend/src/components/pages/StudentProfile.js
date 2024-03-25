import "../items/styles/studentprofile.css";
import QRCode from "react-qr-code";
const StudentProfile = () => {
  return (
    <>
      <div className="profileHeaderContainer col-l-8">
        <div className="BarcodeContainer">
          <QRCode value="65febe6416b86fb8a891f1a9" />{" "}
        </div>
        <div className="studentProfileContainer">K </div>
      </div>
    </>
  );
};
export default StudentProfile;