import axios from 'axios'
const axiosIns = axios.create({
  baseURL: "/api",
  timeout: 7000
});
axiosIns.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosIns.interceptors.response.use(function (response) {
  // 对响应数据做点什么(自定义添加了.data)
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default axiosIns;