import axios from "axios";
const API_URL = "http://localhost:5000/api/";

const createAcademicType = async (academicNames) => {
  const response = await axios.post(API_URL + "academicType", academicNames);
  console.log(response);
};

const academicService = {
  createAcademicType,
};

export default academicService;
