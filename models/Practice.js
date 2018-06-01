const mongoose = require('mongoose');
const { Schema } = mongoose;

const practiceSchema = new Schema({
  practiceId: Number
});

mongoose.model('practices', practiceSchema);
