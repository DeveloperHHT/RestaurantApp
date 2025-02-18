import axios from "axios";

const API_URL = "http://localhost:5001/api/product"; // Backend URL

export const getProducts = () => axios.get(API_URL);

export const addProduct = (product) =>
  axios.post(API_URL, JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });

export const updateProduct = (id, product) =>
  axios.put(`${API_URL}/${id}`, JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });

export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
