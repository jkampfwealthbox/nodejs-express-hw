'use strict';

/**
 * Simple Express <em>"Hello World!"</em> example.
 *
 * @author Hrvoje Tutman
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/hello', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(req.headers, null, 2));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

