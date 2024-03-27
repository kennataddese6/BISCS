import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
const ScanBarcode = () => {
  const [scanResult, setScanResult] = useState("");
  const handleResult = (text, result) => {
    setScanResult(text + result);
  };
  return (
    <>
      <div style={{ width: "200px", height: "200px" }}>
        <Scanner
          onResult={(text, result) => handleResult(text, result)}
          onError={(error) => console.log(error?.message)}
        />
        <h3>Result: {scanResult}</h3>
      </div>
    </>
  );
};
export default ScanBarcode;
