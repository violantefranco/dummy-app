const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/', (req, res) => {
  res.send('Hello from dummy app!');
});

app.get('/test', (req, res) => {
  res.send('Hello from dummy app!');
});

app.listen(port, () => {
  console.log(`Dummy app listening on port ${port}`);
});