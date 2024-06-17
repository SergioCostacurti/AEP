
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const userRoutes = require('./routes/users');
const consumptionRoutes = require('./routes/consumption');
const alertRoutes = require('./routes/alerts');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/consumption', consumptionRoutes);
app.use('/alerts', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
