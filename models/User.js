const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

module.exports = mongoose.model('users', userSchema);
