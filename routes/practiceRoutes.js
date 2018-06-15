const mongoose = require('mongoose');

const Practice = mongoose.model('practices');

module.exports = app => {
  //GET all practices from db
  app.get('/api/practices', async (req, res) => {
    const practices = await Practice.find().select();

    res.send(practices);
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
