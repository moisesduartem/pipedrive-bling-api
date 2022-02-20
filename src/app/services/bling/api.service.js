import axios from 'axios';

const getBlingApi = () => axios.create({
  baseURL: process.env.BLING_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    'x-api-key': process.env.BLING_API_KEY,
  },
});

export { getBlingApi };
