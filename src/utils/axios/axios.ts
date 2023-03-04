/* eslint-disable no-param-reassign */
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
    withCredentials: true,
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    // }
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if(token) config.headers.Authorization = `Bearer ${token}`;

    return config
}, error => Promise.reject(error))
