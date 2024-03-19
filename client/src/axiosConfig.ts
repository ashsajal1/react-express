import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Your default base URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

export default instance;
