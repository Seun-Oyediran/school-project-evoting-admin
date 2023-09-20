import axios from 'axios';
import config from '../../utils/config';
import axiosInstance from '../axiosConfig';

const { baseUrl } = config;

interface Request {
  url: string;
  body?: any;
  root?: boolean;
  auth?: boolean;
}

const headers = {
  'Content-Type': 'application/json',
  // Accept: 'application/json, text/plain, */*',
  'X-Request-Source': 'med-connect',
  // 'X-API-Key': 'w-fLkXbog9I75Em_OJgOFBoEjoXaCxPirctIQJ0h9sY=',
};

const del = async ({ url, body: data }: Request) =>
  (
    await axiosInstance.delete(url, {
      data,
    })
  ).data;

const get = async ({ url, root, auth = true }: Request) => {
  return (
    await (auth
      ? axiosInstance.get(url)
      : axios.get(root ? url : baseUrl + url, {
          headers,
        }))
  ).data;
};

const post = async ({ url, body, root, auth = true }: Request) => {
  return (
    await (auth
      ? axiosInstance.post(url, body)
      : axios.post(root ? url : baseUrl + url, body, { headers }))
  ).data;
};

const patch = async ({ url, body, root, auth = true }: Request) => {
  return (
    await (auth
      ? axiosInstance.patch(url, body)
      : axios.patch(root ? url : baseUrl + url, body, { headers }))
  ).data;
};

const put = async ({ url, body, root, auth = true }: Request) => {
  return (
    await (auth
      ? axiosInstance.put(url, body)
      : axios.put(root ? url : baseUrl + url, body, { headers }))
  ).data;
};

const api = {
  delete: del,
  get,
  patch,
  post,
  put,
};

export default api;
