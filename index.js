const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Practice');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require('./routes/practiceRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
