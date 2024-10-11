const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.get('/api/data', (req, res) => {
    // const data = req.body;
    // res.status(200).json({ message: 'Data received', data });
    res.send("Hiiiiiiiiiiiiii!")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port "http://localhost:${PORT}"`);
});
