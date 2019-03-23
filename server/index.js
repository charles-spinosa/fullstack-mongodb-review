const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const router = require('./routes.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.use('/api', router);

// add middleware

app.listen(port, () => console.log(`Listening on port ${port}`));
