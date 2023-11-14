const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: ,
  friends: 
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await User.insertMany(
        [
          
        ]
      );
      return console.log('User added', results);
    }
    return console.log('Already populated');
  })
  .catch(err => handleError(err));

module.exports = User;
