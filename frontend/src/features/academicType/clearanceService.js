import axios from "axios";
const API_URL = "https://vgf59b03-5000.uks1.devtunnels.ms/api/";

const createClearanceType = async (academicNames) => {
  const response = await axios.post(API_URL + "clearanceType", academicNames);
  return response.data;
};
const getClearanceTypes = async () => {
  const response = await axios.get(API_URL + "clearanceType");
  return response.data;
};
const updateClearance = async (data) => {
  const response = await axios.put(API_URL + "clearanceType", data);
  return response.data;
};
const defineClearance = async (data) => {
  const response = await axios.put(
    API_URL + "clearanceType/defineClearance",
    data
  );
  return response.data;
};

const academicService = {
  createClearanceType,
  getClearanceTypes,
  updateClearance,
  defineClearance,
};

export default academicService;
