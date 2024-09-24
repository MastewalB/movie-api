const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/api');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));;

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;