'use strict';

/**
 * Simple Express <em>"Hello World!"</em> example.
 *
 * @author Hrvoje Tutman
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// /hello route: returns headers
app.get('/hello', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(req.headers, null, 2));
});

// Catch-all: redirect everything else to /hello
app.use((req, res) => {
  res.redirect('/hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

