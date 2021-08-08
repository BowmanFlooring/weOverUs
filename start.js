require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE = require('./mongodb');
console.log('mongodb.DATABASE');


mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(new error('Oops! Something went wrong!'));;
  });

require('./models/Registration');
const app = require('./app');

const server = app.listen(3000, () => {
  console.log('Express is running on port ${ server.address().port }');
});