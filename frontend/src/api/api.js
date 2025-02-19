import axios from 'axios';

const API_URL = "http://localhost:5001/api";

export const getFoods = async () => {
    const response = await axios.get(`${API_URL}/food`);
    return response.data;
};

export const getIngredients = async () => {
    const response = await axios.get(`${API_URL}/ingredient`);
    return response.data;
};

export const getReservations = async () => {
    const response = await axios.get(`${API_URL}/reservation`);
    return response.data;
};

export const getProducts = async () => {  // 📌 Eksik olabilir
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/products/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
};
