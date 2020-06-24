const { Router } = require('express');

const CarCollection = require('../models/carCollections');

const router = Router();

// router.get('/', async (req, res, next) => {
//   try {
//     const cars = await CarCollection.find()
//     const totalCars = await CarCollection.countDocuments()
//     // cars.unshift({"totalCars": totalCars})
//     res.json(cars);
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/', async (req, res, next) => {
  // let priceRange = req.query.price;
  // let name = req.query.name;
  // let passengerCapacityRange = req.query.passengerCapacityRange;
  // let category = req.query.category;

  const filters = {
    priceRange: Number(req.query.price),
    name: req.query.name,
    passengerCapacityRange: Number(req.query.passengerCapacity),
    category: req.query.category === undefined ? req.query.category = "" : req.query.category
  }

  console.log(filters)
  try {
    const cars = await CarCollection.find({
      'name': { '$regex': filters.name, "$options": "i" }, 
      'price': { $gte: filters.priceRange },
      'passengerCapacity': { $gte: filters.passengerCapacityRange},
      'category': `${filters.category}`
    })
    const totalCars = cars.length
    res.json({totalCars, cars});
  } catch (error) {
    next(error);
  }
});



router.get('/:id', async (req, res, next) => {
  try {
    const carcollection = await CarCollection.findById(req.params.id)
    res.json(carcollection)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newEntry = new CarCollection(req.body);
    const createdEntry = await newEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
})

router.put('/update/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const updateObject = req.body
    const updatedObject = await CarCollection.findOneAndUpdate({ _id: id }, updateObject, { new: true }).exec()

    return res.status(200).send({
      message: updatedObject
    });
  } catch (error) {
    next(error)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const toDeleteEntry = await CarCollection.findByIdAndRemove({_id: req.params.id}).exec()
    return res.status(200).send({
      message: "delete successful"
    });
  } catch (error) {
    next(error)
  }
})

module.exports = router;

// var searchQuery = {};
// searchQuery.email = req.query.email;
// searchQuery.name = { $regex: req.query.name, $options: 'i' };
// User.find(searchQuery, function (error, user) {
//   if (error || user === null) {
//     return res.status(500).send(error);
//   }
//   return res.status(200).send(user);
// });

// { "firstname": { $regex: `^${req.body.firstname}.*`, $options: 'si' } }



// console.log(req.query.hdmi);
// console.log(req.query.resolution);

// //Remember to sanitize the query before passing it to db
// var query = {};
// if (req.query.resolution) query.resolution = req.query.resolution;
// if (req.query.resolution) query.hdmi = req.query.hdmi;