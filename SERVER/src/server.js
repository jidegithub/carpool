const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:8080'
}))

// routes
app.get("/", (req, res) => {
  res.json({
    message: "hello! welcome to carpool project!"
  })
})


const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`listening at htp://localhost:${port}`);
});