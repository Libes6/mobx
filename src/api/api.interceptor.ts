import axios from 'axios';

export const getContentType = () => ({
    'Content-Type': 'application/json',
});
export const getContentTypeImage = () => ({
    'Content-Type': 'multipart/form-data',
});

export const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: getContentType(),
});
