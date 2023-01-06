const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


router.post('/create', ordersController.createOrder);

router.patch('/cancelorder', ordersController.cancelOrder);

router.patch('/returnorder', ordersController.returnOrder);

router.get('/getordersforsellers', ordersController.getOrdersForSeller);

module.exports = router;