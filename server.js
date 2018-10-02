const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const url = 'mongodb://localhost:27017/players';

const db = require('./models');
const controllers = require('./controllers');

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, function(){
  console.log("Up and running!")
})
