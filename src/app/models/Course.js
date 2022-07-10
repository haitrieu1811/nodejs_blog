const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  body: { type: String, maxLength: 260 },
  date: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);