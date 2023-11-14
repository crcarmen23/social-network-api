const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true,  },
  thoughts: {type: , ref: "Thought"},
  friends: {type: , ref: "User"}
});

const User = mongoose.model('User', userSchema);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = User;
