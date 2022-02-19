import axios from 'axios';

const getPipedriveApi = () => axios.create({
  baseURL: process.env.PIPEDRIVE_URL,
  proxy: false,
  params: {
    api_token: process.env.PIPEDRIVE_TOKEN,
  },
});

export { getPipedriveApi };
