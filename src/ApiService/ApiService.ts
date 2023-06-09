import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://localhost:44331/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

/**
 * Adds token from local storage for each api call
 */
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
 * Performs an HTTP request using the specified method, URL, and body.
 *
 * @param {string} method - The HTTP method ('get', 'post', 'put', 'delete').
 * @param {string} url - The URL to send the request to.
 * @param {any} [body] - The request body (optional).
 * @returns {Promise<any>} - A promise that resolves to the response data.
 */
const request = async (method: string, url: string, body?: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance.request({
      method,
      url,
      data: body,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to perform ${method.toUpperCase()} request to ${url}:`, error);
    throw error;
  }
};

/**
 * Service for making API requests.
 */
const ApiService = {
  /**
   * Performs an HTTP GET request. 
   */
  get: async (urlRoute: string): Promise<any> => request('get', urlRoute),

  /**
   * Performs an HTTP POST request.
   */
  post: async (urlRoute: string, body: any): Promise<any> => request('post', urlRoute, body),

  /**
   * Performs an HTTP PUT request.
   */
  put: async (urlRoute: string, body: any): Promise<any> => request('put', urlRoute, body),

  /**
   * Performs an HTTP DELETE request.
   */
  delete: async (urlRoute: string): Promise<any> => request('delete', urlRoute),
};

export default ApiService;
