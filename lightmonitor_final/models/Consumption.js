
const mongoose = require('mongoose');

const ConsumptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  consumption: Number,
  location: String
});

module.exports = mongoose.model('Consumption', ConsumptionSchema);
