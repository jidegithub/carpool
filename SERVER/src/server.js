const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares')
const cars = require('./api/cars')

mongoose.connect(process.env.LOCAL_DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false 
})

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({
    message: "hello! welcome to carpool project!"
  })
})

// other routes
app.use('/api/cars', cars);

// ERROR HANDLER always comes last
app.use(middlewares.notFound);

app.use(middlewares.errorHandler);


const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});