require('dotenv').config();
const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and listening on port: ${port}`);
});



app.use(router);
