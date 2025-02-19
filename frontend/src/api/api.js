import axios from 'axios';
const API_BASE_URL = "http://localhost:5001/api"; 

const API_URL = "http://localhost:5001/api/product";  

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const addProduct = async (product) => {
    const response = await axios.post(API_URL, product, {
        headers: {
            "Content-Type": "application/json"  
        }
    });
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product, {
        headers: {
            "Content-Type": "application/json"  
        }
    });
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
