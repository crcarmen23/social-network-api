const router = require('express').Router();

const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');
  
  router.route('/').get(getThoughts).post(createThought);
  
  router.route('/:userId').get(getSingleThought);


module.exports = router;