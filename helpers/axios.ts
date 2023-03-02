import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

let config: CreateAxiosDefaults = {
  baseURL: "https://digital-marketing-admin.icapcrif.com/wp-json/wp/v2/",
};

const _axios: AxiosInstance = axios.create(config);

_axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios;
