import axios from "axios";

const baseUrl = 'http://172.31.7.101:8080';

const getAboutInfo = (options) => {
  return axios.get("/api/aboutInfo")
};

const getMainInfo = (options) => {
  return axios.get("/api/mainInfo")
};

export {
  getAboutInfo,
  getMainInfo
};