// axios.js

import axios from 'axios';
console.log(import.meta.env);
// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL, // 可以根据您的项目需求设置基础URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前可以进行一些配置，例如添加请求头等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，可以根据需要进行全局的数据处理
    return response.data;
  },
  (error) => {
    // 对错误进行处理，例如统一错误提示或重定向到错误页面
    return Promise.reject(error);
  }
);

export default instance;
