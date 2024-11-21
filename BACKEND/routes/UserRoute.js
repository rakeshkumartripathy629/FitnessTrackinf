const express = require('express');
const router = express.Router();
const { UserRegister, UserLogin, getUserDashboard, getWorkoutsByDate, addWorkout } = require('../controllers/User');
const { authenticate } = require('../middleware/verifyToken');

// User routes
router.post('/register', UserRegister);  // User registration
router.post('/login', UserLogin);        // User login

// Protected routes
router.get('/dashboard', authenticate, getUserDashboard);  // Get user dashboard data
router.get('/workouts', authenticate, getWorkoutsByDate);  // Get workouts for a specific date
router.post('/add-workout', authenticate, addWorkout);     // Add workout data

module.exports = router;
