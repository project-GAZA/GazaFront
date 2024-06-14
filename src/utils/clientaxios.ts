// src/utils/axios.js
import axios from 'axios';

const url =
  process.env.NEXT_PUBLIC_FRONT_API_URL || 'http://localhost:3000/api';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
