// src/utils/axios.js
import axios from 'axios';

const url =
  process.env.NEXT_PUBLIC_BACK_API_URL || 'http://localhost:3000/api/test';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    // 응답을 처리하고 반환
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
