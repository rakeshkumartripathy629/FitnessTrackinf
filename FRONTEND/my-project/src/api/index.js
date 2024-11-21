import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api", // Updated base URL for local development
});

// User Authentication Endpoints
export const UserSignUp = async (data) => await API.post("/user/register", data);
export const UserSignIn = async (data) => await API.post("/user/login", data);

// Dashboard Details Endpoint
export const getDashboardDetails = async (token) =>
  await API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

// Get Workouts by Date Endpoint
export const getWorkouts = async (token, date) =>
  await API.get(`/user/workouts?date=${date}`, { // Ensure query params are correct
    headers: { Authorization: `Bearer ${token}` },
  });

// Add Workout Endpoint
export const addWorkout = async (token, data) =>
  await API.post("/user/add-workout", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
