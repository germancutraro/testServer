const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('home')
});

app.get('/hello', (req, res) => {
  res.send("hello wordl")
});

app.listen(port, () => console.log(`running ${port}`));
