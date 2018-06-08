const mongoose = require('mongoose');

const Practice = mongoose.model('practices');

//TODO: GET all practices from db
module.exports = app => {
  app.get('/api/practices', (req, res) => {
    res.send([1, 2, 3]);
  });

  //POST a new practice to db
  app.post('/api/practices', async (req, res) => {
    const { date, instructor, classType, rating } = req.body;

    const practice = new Practice({
      date,
      instructor,
      classType,
      rating
    });

    try {
      await practice.save();

      res.send(practice);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
