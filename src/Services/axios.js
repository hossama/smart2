import Vue from "vue";

import axios from "axios";

// new

const devInstance = createInstance("https://admin.smartcode.com.sa/public/graphql");

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Acess-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Accept-Language": localStorage.lang,
    },
  });
}

// axios.defaults.withCredentials = true;

axios.defaults.baseURL = "https://admin.smartcode.com.sa/public/graphql";

axios.interceptors.request.use(function (config) {
  config.headers.common = {
    "Accept-Language": localStorage.lang,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };
  return config;
});

// new token

axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default {
  install() {
    Vue.prototype.$http = devInstance;
  },
};