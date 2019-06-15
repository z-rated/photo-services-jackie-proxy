require('newrelic');
const express = require('express');
const path = require('path');

const app = express();
const port = 1000;
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/restaurant/photo/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3001/restaurant/photo/${id}`);
})

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3001/api/restaurants/${id}/reviews`);
})

app.get('/api/restaurants/:id/info', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.16.165.5:3002/api/restaurants/${id}/info`);
})

app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3003/api/restaurants/${id}/googlereviews`);
})

app.listen(port, console.log('proxy server listening on port', port));
