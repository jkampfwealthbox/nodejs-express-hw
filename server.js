'use strict';

/**
 * Simple Express <em>"Hello World!"</em> example.
 *
 * @author Hrvoje Tutman
 */
const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.json({message: 'Hello world!'}));

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));
