import "../items/styles/studentprofile.css";
import QRCode from "react-qr-code";
import { FaClipboardList } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import StudentClearance from "../items/studentClearance";
import StudentBelongings from "../items/studentBelongings";
import StudentFileCase from "../items/studentFileCase";
import StudentBorrowedItem from "../items/studentBorrowedItem";
import Notifications from "../items/notificaton";
import { useState, useEffect, useRef } from "react";

const StudentProfile = () => {
  const [contentIndex, setContentIndex] = useState(1);
  const [animationIndex, setAnimationIndex] = useState(0);
  const animationIndexRef = useRef(animationIndex);

  useEffect(() => {
    animationIndexRef.current = animationIndex;
  }, [animationIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (animationIndexRef.current === 5) {
        clearInterval(interval);
        setAnimationIndex(0);
      } else {
        setAnimationIndex(animationIndexRef.current + 1);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);
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
            <li
              className={`studentMenuItem ${
                contentIndex === 1 && `studentMenuItemActive`
              } `}
              onClick={() => setContentIndex(1)}
            >
              Clearance
            </li>
            <li
              className={`studentMenuItem ${
                contentIndex === 2 && `studentMenuItemActive`
              }`}
              onClick={() => setContentIndex(2)}
            >
              Belongings
            </li>
            <li
              className={`studentMenuItem ${
                contentIndex === 3 && `studentMenuItemActive`
              }`}
              onClick={() => setContentIndex(3)}
            >
              Loans
            </li>
            <li
              className={`studentMenuItem ${
                contentIndex === 4 && `studentMenuItemActive`
              }`}
              onClick={() => setContentIndex(4)}
            >
              Cases
            </li>
            <li
              className={`studentMenuItem ${
                contentIndex === 5 && `studentMenuItemActive`
              }`}
              onClick={() => setContentIndex(5)}
            >
              Notifications
            </li>
          </ul>
        </div>
      </div>
      <div className="studentMobilMenuContainer">
        <ul className="studentMobileiconList">
          <li
            className={`listItemMobileIcon ${
              (animationIndex === 1 && `waveturn`,
              contentIndex === 1 && `listItemMobileIconActive`)
            }`}
            onClick={() => setContentIndex(1)}
          >
            {" "}
            <FaClipboardList />
          </li>
          <li
            className={`listItemMobileIcon ${
              (contentIndex === 2 && `listItemMobileIconActive`,
              animationIndex === 2 && `waveturn`)
            }`}
            onClick={() => setContentIndex(2)}
          >
            {" "}
            <FaSuitcase />
          </li>
          <li
            className={`listItemMobileIcon ${
              (contentIndex === 3 && `listItemMobileIconActive`,
              animationIndex === 3 && `waveturn`)
            }`}
            onClick={() => setContentIndex(3)}
          >
            <FaGavel />
          </li>
          <li
            className={`listItemMobileIcon ${
              (contentIndex === 4 && `listItemMobileIconActive`,
              animationIndex === 4 && `waveturn`)
            }`}
            onClick={() => setContentIndex(4)}
          >
            <FaHandHoldingUsd />
          </li>
          <li
            className={`listItemMobileIcon ${
              (contentIndex === 5 && `listItemMobileIconActive`,
              animationIndex === 5 && `waveturn`)
            }`}
            onClick={() => setContentIndex(5)}
          >
            <FaBell />
          </li>
        </ul>
      </div>
      <div className="studentPageContent">
        {contentIndex === 1 && <StudentClearance />}
        {contentIndex === 2 && <StudentBelongings />}
        {contentIndex === 3 && <StudentFileCase />}
        {contentIndex === 4 && <StudentBorrowedItem />}
        {contentIndex === 5 && <Notifications />}
      </div>
    </>
  );
};
export default StudentProfile;
