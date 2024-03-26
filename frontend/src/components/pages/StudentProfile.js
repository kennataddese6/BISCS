import "../items/styles/studentprofile.css";
import QRCode from "react-qr-code";
const StudentProfile = () => {
  return (
    <>
      <div className="profileHeaderContainer col-l-8">
        <div className="BarcodeContainer">
          <QRCode value="65febe6416b86fb8a891f1a9" className="barcode" />{" "}
        </div>
        <div className="studentProfileContainer">
          <div className="studentProfilePicture"></div>
          <div className="stuentFullName">Semret Zerihun</div>
        </div>
        <div className="menuContainer">
          <ul className="studentMenuHeader">
            <li className="studentMenuItem">Clearance</li>
            <li className="studentMenuItem">Belongings</li>
            <li className="studentMenuItem">Loans</li>
            <li className="studentMenuItem">Cases</li>
            <li className="studentMenuItem">Notifications</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default StudentProfile;
