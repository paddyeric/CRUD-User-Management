const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const UserModel = mongoose.model('UserMgt', userSchema);

module.exports = UserModel;