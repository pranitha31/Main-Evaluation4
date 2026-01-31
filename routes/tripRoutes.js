const express = require('express');
const {createTrip, updateTrip, getTrip, deleteTrip, endTrip}= require('../controllers/tripController');

const router = express.Router();

router.post('/create',createTrip);
router.patch('/update/:tripId',updateTrip);
router.get('/:tripId',getTrip);
router.delete('/delete/:tripId',deleteTrip);
router.patch('/end/:tripId',endTrip);

module.exports = router;