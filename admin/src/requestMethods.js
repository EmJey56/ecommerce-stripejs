import axios from "axios";

// Base API URL for your application
const BASE_URL = "https://ecommerce-stripejs-api.onrender.com/api";

// Retrieve token from localStorage with proper error handling
let TOKEN = "";
try {
  const persistRoot = localStorage.getItem("persist:root");
  if (persistRoot) {
    const user = JSON.parse(JSON.parse(persistRoot).user || "{}");
    if (user && user.currentUser) {
      TOKEN = user.currentUser.accessToken;
    }
  }
} catch (error) {
  console.error("Error retrieving token from localStorage:", error);
}

// Public requests: No authentication required
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// User requests: Requires authentication token
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN ? `Bearer ${TOKEN}` : "" },
});
