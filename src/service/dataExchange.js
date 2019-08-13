import axios from "axios";

const baseUrl = 'http://172.31.7.101:8080';

const getMainInfo = (options) => {
  return axios.get("/api/mainInfo")
};

export {
  getMainInfo
};