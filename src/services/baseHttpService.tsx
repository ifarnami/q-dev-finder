import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.NEXT_API_URL!;

type RequestConfig = Exclude<AxiosRequestConfig, "method" | "url">;

const apiClient = axios.create({
  baseURL: process.env.NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpGetRequest = <T,>(endpoint: string, config?: RequestConfig) =>
  apiClient<T>({
    method: "get",
    url: endpoint,
    ...config,
  })
    .then((res) => res.data)
    .catch((err) => err);

export const httpPostRequest = <T,>(
  endpoint: string,
  data: any,
  config?: RequestConfig
) =>
  apiClient<T>({
    method: "post",
    url: endpoint,
    data,
    ...config,
  })
    .then((res) => res.data)
    .catch((err) => err.response.data);
