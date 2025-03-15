const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to the Sample API!");
});

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello, this is your API response!" });
});

app.post('/api/echo', (req, res) => {
    res.json({ received: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
