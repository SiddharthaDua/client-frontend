import axios from "axios";

// Environment se backend URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Form submit karne ka function
export const submitContactForm = async (userData) => {
    try {
        const response = await api.post("/submit", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
};

export default api;
