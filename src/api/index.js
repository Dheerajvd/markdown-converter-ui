import axios from 'axios';

const api = axios.create({
  baseURL: getBaseUrl('dev'),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const postApi = (endPoint, postData, additionalHeaders = {}) => {
  const headers = { ...api.defaults.headers, ...additionalHeaders };
  return api.post(endPoint, postData, { headers });
};

function getBaseUrl(env){
  if(env === 'dev'){
    return 'http://localhost:8080/api'
  }
}