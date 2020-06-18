const mongoose = require('mongoose');
const { Schema } = mongoose;
const carDetails = require('./carDetails').schema

const CarCollectionSchema = new Schema({
  name: String,
  type: String,
  image: String,
  category: String,
  price: Number,
  analytics: Number,
  details: [carDetails]
},
  {
    timestamps: true
  }
);

const CarCollections = mongoose.model('CarCollections', CarCollectionSchema);

module.exports = CarCollections;