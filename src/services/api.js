//4a0c268d2f2cbb9e5577420694b25d9dcc41ff03
import axios from 'axios';

export const key = '4a0c268d2f2cbb9e5577420694b25d9dcc41ff03';
const api = axios.create({
  baseURL:"https://api-ssl.bitly.com/v4",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`,
  }
});


export default api;

