
const express = require('express');
const cors = require('cors');
const router = require('./routes/UserRoute')
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // If you're sending cookies, set this to true
  }));
app.use(express.json()); // Parse JSON request bodies
; // Parse cookies

// API Routes
app.use("/api/user/", router);

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit process with failure
    }
};

// Server Port
const PORT = process.env.PORT || 8080;

// Start the Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to DB`);
        console.log(`Server is running on port ${PORT}`);
    });
});
