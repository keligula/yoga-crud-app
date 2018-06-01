const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Practice');

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT);
