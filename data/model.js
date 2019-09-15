const feeds = require('./feeds');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true}, 
  feeds: {type: Array, defualt: []}  
});

//console.log([...feeds.default]);

module.exports = mongoose.model('User', UserSchema);
