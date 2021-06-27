// 此axios实例用于发送个人接口相关请求
// 如果需要携带cookie和token的请求,一律在此处发送请求

import axios from 'axios';

const axiosIns = axios.create({
  // 上线后改成线上后台服务器接口
  // baseURL: "http://59.110.242.49:8080",
  //  测试时使用本地后台服务器接口 
  baseURL: "http://127.0.0.1:9000",
  timeout: 8000
});

// 添加请求拦截器
axiosIns.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = sessionStorage.getItem('grayfox_token');
  if (token) {
    config.headers.token = token;
  };
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosIns.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 暴露请求接口
export default axiosIns;
