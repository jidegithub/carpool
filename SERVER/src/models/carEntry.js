const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarEntrySchema = new Schema({ 
  location: String,
  pickUpDate: {
    required: true,
    type: Date,
  },
  pickUpDateTime:{
    required: true,
    type: Date,
  },
  dropOffDate: {
    required: true,
    type: Date,
  },
  dropOffDateTime: {
    required: true,
    type: Date,
  },
  carType: String
},
  {
    timestamps: true
  }
);

const CarEntry = mongoose.model('CarEntry', CarEntrySchema);

module.exports = CarEntry;