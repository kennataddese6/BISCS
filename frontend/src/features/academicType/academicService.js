import axios from "axios";
const API_URL = "http://localhost:5000/api/";

const createAcademicType = async (academicNames) => {
  const response = await axios.post(API_URL + "clearanceType", academicNames);
  return response.data;
};
const getAcademicTypes = async () => {
  const response = await axios.get(API_URL + "clearanceType");
  return response.data;
};

const academicService = {
  createAcademicType,
  getAcademicTypes,
};

export default academicService;
