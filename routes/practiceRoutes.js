const mongoose = require('mongoose');

const Practice = mongoose.model('practices');

module.exports = app => {
  //GET all practices
  app.get('/api/practices', async (req, res) => {
    const practices = await Practice.find().select();

    res.send(practices);
  });

  //GET practice by id
  app.get('/api/practices/:id', async (req, res) => {
    const practice = await Practice.findById(req.params.id);

    res.send(practice);
  });

  //POST a new practice
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

  //DELETE practice by id
  app.delete('/api/practices/:id', async (req, res) => {
    const practice = await Practice.findByIdAndRemove(req.params.id);

    res.send(practice);
  });

  //PUT update practice by id
  app.put('/api/practices/:id', async (req, res) => {
    console.log('values: ', req.body);
    const practice = await Practice.findByIdAndUpdate(req.params.id, req.body);

    res.send(practice);
  });
};
