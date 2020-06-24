const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarDetailsSchema = new Schema({
  passengerCapacity: {
    default: 0,
    type: Number,
  },
  largeSuitCaseCapacity: {
    default: 0,
    type: Number,
  }, 
  smallSuitCaseCapacity: {
    default: 0,
    type: Number,
  },
  transmissionType: String,
  airConditioning: {
    default: false,
    type: Boolean,
  },
  fuelCapacity: Number,
  hasSystemDispay: {
    default: false,
    type: Boolean,
  },
  systemDisplayType: String,
  hasStabiltyControl: {
    default: false,
    type: Boolean,
  },
  hasHillStartAssistControl: {
    default: false,
    type: Boolean,
  },
  hasStereoSystem: {
    default: false,
    type: Boolean,
  },
},
  {
    timestamps: true
  }
);

const CarDetails = mongoose.model('CarDetails', CarDetailsSchema);

module.exports = CarDetails;