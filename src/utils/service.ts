import axios, { AxiosRequestConfig } from "axios";
// import Cookies from "js-cookie";

export type ApiResponse<T, TExtra extends object = object> = {
  status: number;
  message: string;
  data: T;
} & TExtra;

type ApiErrorResponse = {
  error?: string;
  message?: string;
};

export function getApiErrorMessage(
  error: unknown,
  fallback = "请求失败，请稍后重试",
) {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) return fallback;

  if (error.code === "ECONNABORTED") return "请求超时，请稍后重试";

  return (
    error.response?.data?.error ?? error.response?.data?.message ?? fallback
  );
}

const baseURL = import.meta.env.VITE_API_URL;

const request = axios.create({
  baseURL: baseURL,
  timeout: 10000, // 超时设置
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("customer_token");
    // const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data; // 直接返回响应数据
  },
  (error) => {
    if (error.response) {
      // 检查token => 401过期
      if (error.response.status === 401) {
        // 清除本地存储的token
        localStorage.removeItem("customer_token");
        if (localStorage.getItem("supplier_token")) {
          localStorage.removeItem("supplier_token");
        }
        window.location.href = "/";
      }
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.error("Request Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  },
);

function Request<T, TExtra extends object = object>(
  url: string,
  config: AxiosRequestConfig,
): Promise<ApiResponse<T, TExtra>> {
  return request({ url, ...config });
}

export default Request;
