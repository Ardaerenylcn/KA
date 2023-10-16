import axios from 'axios';
import netConsts from './netConsts';

const instance = axios.create({
  baseURL: netConsts.API_BASE_URL,
  timeout: netConsts.API_TIME_OUT,
  headers: {
    MW_USERNAME: "hip-efesmobilesuperuser",
    MW_PASSWORD: "9JnpczyhcR2dfPDpKf5zQLu58bdCPrpv",
  },
});

function onRequest(config) {
  return config;
}

function onRequestFailed(error) {
  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestFailed);

export default instance;