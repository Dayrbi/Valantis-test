import axios from 'axios';
import {API_URL} from '../constants/constants';
import CryptoJS from 'crypto-js'

const stamp = new Date().toISOString().slice(0,10).replace(/-/g,"");
export const api = axios.create({
  baseURL: API_URL,
});
api.interceptors.request.use((config) => {
  config.headers['X-Auth'] = CryptoJS.MD5(`Valantis_${stamp}`).toString();
  config.headers['Content-Type'] = "application/json";
  return config;
});