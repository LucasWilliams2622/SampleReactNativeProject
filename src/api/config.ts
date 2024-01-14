import axios, {Axios} from 'axios';
export const REQUEST_TIMEOUT = 10000;
export const BASE_URL_USER = 'https://api.giaiphap.xyz/acc/api/v1';
export function axiosInstanceUser(
  type:
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data',
): Axios {
  const instance = axios.create({
    baseURL: BASE_URL_USER,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Content-type': type,
      accept: 'application/json',
    },
  });
  return instance;
}