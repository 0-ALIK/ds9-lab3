const express = require('express');
const app = express();
const port = 3000;

// respuestas en json
app.use(express.json());

// /login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
    res.json({ email, password });
});
