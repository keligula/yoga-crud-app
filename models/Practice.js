const mongoose = require('mongoose');
const { Schema } = mongoose;

//TODO: change data type for date and rating
const practiceSchema = new Schema({
  date: String,
  instructor: String,
  classType: String,
  rating: String
});

mongoose.model('practices', practiceSchema);
