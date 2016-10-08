import axios from 'axios';

const setupAxiosInterceptors = () => {
  const onRequestSuccess = config => {
    var token = localStorage.getItem('auth-token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    config.timeout = 10000;
    return config;
  };
  const onResponseSuccess = (response) => response;
  const onResponseError = error => {
    if (error.status == 403) {
      localStorage.removeItem('auth-token');
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export {
  setupAxiosInterceptors
};
