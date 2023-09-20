import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import config from '../utils/config';

const baseURL = config.baseUrl;

const token = '7f02984e8398ca597a2f43fb89bafa34cdc1e10c78ff2f59c1b3cf4be0cea108';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Accept: 'application/json, text/plain, */*',
    'X-Request-Source': 'med-connect',
    // 'X-API-Key': 'w-fLkXbog9I75Em_OJgOFBoEjoXaCxPirctIQJ0h9sY=',
  },
});

const onRequest = (request: InternalAxiosRequestConfig): any => {
  request.headers.Authorization = `Bearer ${token || ''}`;

  return request;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);

export default axiosInstance;
