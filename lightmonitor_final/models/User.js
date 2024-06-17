
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  consumptionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Consumption' }]
});

module.exports = mongoose.model('User', UserSchema);
