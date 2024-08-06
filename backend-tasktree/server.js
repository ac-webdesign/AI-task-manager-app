const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://papaxeloudi:alexakos123@cluster0.e63ohlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('TaskTree Backend Server');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
