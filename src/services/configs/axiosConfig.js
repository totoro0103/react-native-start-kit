import axios from 'axios';
import storage from '../../utils/helpers/storage';

const axiosRequest = axios.create({
  baseURL: '',
  timeout: 60 * 1000,
});

axiosRequest.interceptors.request.use(
  async (req) => {
    const token = storage.get(storage.keys.ACCESS_TOKEN) || '';
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  async (error) => error,
);

axiosRequest.interceptors.response.use(
  async (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
);
