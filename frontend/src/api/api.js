import axios from "axios";

const API_URL = "http://localhost:5207/api/product";  // Eğer backend farklı bir portta çalışıyorsa güncelle!

export const getProducts = async () => {
    return await axios.get(API_URL);
};

export const addProduct = async (product) => {
    return await axios.post(API_URL, product);
};

export const updateProduct = async (product) => {
    return await axios.put(API_URL, product);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
