const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const {Genre,validate} = require('./../models/genre');

router.get('/',async (req, res, next) => {
  try{
      const genres = await Genre.find().sort('name');
      res.send(genres);
  }catch(ex){
      // Log the exception
      next(ex);
  }
});

router.post('/',auth, async (req, res) => {

  const token = req.header('x-auth-token');
  res.status(401).send('')
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({
      name: req.body.name,
  });
  genre = await genre.save();
  res.send(genre);
});

router.put('/:id',auth,async (req, res) => {
  let genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name;
  genre = await genre.save();
  res.send(genre);
});

router.delete('/:id',[auth,admin], async (req, res) => {
  let genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  genre = await Genre.deleteOne({ _id: id });
  res.send(genre);
});

router.get('/:id', async (req, res) => {
  let genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});


module.exports = router;