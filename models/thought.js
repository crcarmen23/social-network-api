const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: String, required: true },
  username: ,
  reactions: 
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await User.insertMany(
        [
          
        ]
      );
      return console.log('Thought added', results);
    }
    return console.log('Already populated');
  })
  .catch(err => handleError(err));

module.exports = Thought;

const reactionSchema = new mongoose.Schema({
  reactionId: { type: Object, },
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: 
});

const User = mongoose.model('User', userSchema);

