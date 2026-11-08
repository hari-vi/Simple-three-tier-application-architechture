const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // 1. Import CORS

const app = express();
app.use(cors()); // 2. Enable CORS for all incoming requests

const port = 5001;
const url = process.env.MONGO_URI || 'mongodb://admin:password123@localhost:27017';

app.get('/api/data', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        res.json({ message: "Hello from the Backend Tier! Connected successfully to Database Tier." });
        client.close();
    } catch (err) {
        res.status(500).json({ error: "Failed to connect to database", details: err.message });
    }
});

app.listen(port, () => console.log(`Backend listening on port ${port}`));