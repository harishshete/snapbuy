const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const cartController = require('../Controller/CartController/CartController');


// Add Products in cart
router.get('/getproducts', cartController.getAllProducts);

router.delete('/remove', cartController.removeProduct);

router.patch('/update', cartController.updateProductQuantity);

router.post('/add', cartController.addproduct);

module.exports = router;