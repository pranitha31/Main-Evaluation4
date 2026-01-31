const express=require('express');
const {addVehilce, assignDriver, getVehicle}=require('../controllers/vehicleController');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

router.post('/add',rateLimiter,addVehilce);
router.patch('/assignDriver/:vahicleId',assignDriver);
router.get('/:vahicleId',getVehicle);

 module.exports = router;