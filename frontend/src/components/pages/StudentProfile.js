import "../items/styles/studentprofile.css";
import QRCode from "react-qr-code";
import { FaClipboardList } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import StudentClearance from "../items/studentClearance";
import { useState } from "react";
const StudentProfile = () => {
  const [contentIndex, setContentIndex] = useState(1);
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
      <div className="studentMobilMenuContainer">
        <ul className="studentMobileiconList">
          <li
            className={`listItemMobileIcon ${
              contentIndex === 1 && `listItemMobileIconActive`
            }`}
            onClick={() => setContentIndex(1)}
          >
            {" "}
            <FaClipboardList />
          </li>
          <li className="listItemMobileIcon">
            {" "}
            <FaSuitcase />
          </li>
          <li className="listItemMobileIcon">
            <FaGavel />
          </li>
          <li className="listItemMobileIcon">
            <FaHandHoldingUsd />
          </li>
          <li className="listItemMobileIcon">
            <FaBell />
          </li>
        </ul>
      </div>
      <div className="studentPageContent">
        {contentIndex === 1 && <StudentClearance />}
      </div>
    </>
  );
};
export default StudentProfile;
