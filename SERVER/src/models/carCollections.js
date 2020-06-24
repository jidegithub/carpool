const mongoose = require('mongoose');
const { Schema } = mongoose;
const carDetails = require('./carDetails').schema

const CarCollectionSchema = new Schema({
  manufacturer: String,
  model: String,
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