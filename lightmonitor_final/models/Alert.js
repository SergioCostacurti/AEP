
const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  date: Date
});

module.exports = mongoose.model('Alert', AlertSchema);
