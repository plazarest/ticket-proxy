const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/print', async (req, res) => {
  try {
    const response = await axios.post('http://100.100.92.9:3000/print', req.body); // ← Sustituye 100.X.X.X por la IP de Tailscale de tu tablet
    res.send(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error enviando al servidor local');
  }
});

app.listen(port, () => {
  console.log(`Proxy escuchando en puerto ${port}`);
});


