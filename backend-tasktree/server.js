const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

require('dotenv').config();

// Import routes
const taskRoutes = require('./routes/tasks'); 
const generateAIRoutes = require('./routes/generateAI'); 

const mongoURI = process.env.MONGO_URI;


// MongoDB connection

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());
//USE ROUTES
app.use('/categories', taskRoutes);
app.use('/generateAI', generateAIRoutes);


app.get('/', (req, res) => {
    res.send('TaskTree Backend Server new');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});