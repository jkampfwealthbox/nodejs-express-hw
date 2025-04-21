'use strict';

/**
 * Simple Express <em>"Hello World!"</em> example.
 *
 * @author Hrvoje Tutman
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const appName = process.env.HEROKU_APP_NAME || 'unknown-app';

app.get('/hello', (req, res) => {
  const output = {
    app: appName,
    headers: req.headers
  };
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(output, null, 2));
});

app.use((req, res) => {
  res.redirect('/hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



