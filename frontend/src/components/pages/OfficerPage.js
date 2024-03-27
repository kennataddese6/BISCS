import "../items/styles/studentprofile.css";
import { FaSuitcase } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaQrcode } from "react-icons/fa";
import ScanBarcode from "../items/scanBarcode";
const OfficerPage = () => {
  const [contentIndex, setContentIndex] = useState(0);
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
      <div className="OfficerHeaderContainer col-l-8">
        <div className="menuContainer">
          <ul className="studentMenuHeader">
            <li
              className={`studentMenuItem ${
                contentIndex === 1 && `studentMenuItemActive`
              } `}
              onClick={() => setContentIndex(1)}
            >
              Scan
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
              (contentIndex === 1 && `listItemMobileIconActive`,
              animationIndex === 1 && `waveturn`)
            }`}
            onClick={() => setContentIndex(1)}
          >
            {" "}
            <FaQrcode />
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
        {contentIndex === 1 && <ScanBarcode />}
      </div>
    </>
  );
};
export default OfficerPage;
