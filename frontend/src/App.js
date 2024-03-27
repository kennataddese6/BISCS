import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/items/utilities/Spinner";
import Clearance from "./components/pages/Clearance";
import StudentProfile from "./components/pages/StudentProfile";
import OfficerPage from "./components/pages/OfficerPage";
function App() {
  const { isLoading } = useSelector((state) => state.clearance);

  return (
    <>
      <ToastContainer theme="dark" />
      {isLoading && <Spinner />}
      <Router>
        <Routes>
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/officer" element={<OfficerPage />} />
          <Route path="/" element={<Clearance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
