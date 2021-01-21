
import axios from 'axios'
import nprogress from 'nprogress'
const axiosIns = axios.create({
  baseURL: "https://free-api.heweather.net",
  timeout: 7000
});
axiosIns.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log("准备获取用户天气")
  nprogress.start()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosIns.interceptors.response.use(function (response) {
  // 对响应数据做点什么(自定义添加了.data)
  nprogress.done();
  console.log('获取到用户所在城市的天气信息了')
  console.log(response.data);
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default axiosIns;