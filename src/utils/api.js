import axios from "axios";

// Backend URL (Local development ke liye 5000)
const API_BASE_URL = "http://localhost:5000/api/form";

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
        // Backend se aane wala error message return karega
        throw error.response?.data?.message || "Something went wrong";
    }
};

export default api;