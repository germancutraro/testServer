const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  return res.send('home')
});

app.get('/hello', (req, res) => {
  return res.send("hello word")
});

app.listen(port, () => console.log(`Running on PORT: ${port}`));
