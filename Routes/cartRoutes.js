const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const cartController = require('../Controller/CartController/CartController');


// Add Products in cart
router.get('/getproducts', cartController.getAllProducts);

router.delete('/remove', authControler.verifyAndAuthorizeShopper, cartController.removeProduct);

router.patch('/update', authControler.verifyAndAuthorizeShopper,cartController.updateProductQuantity);

router.post('/add', authControler.verifyAndAuthorizeShopper,cartController.addproduct);

// router.get('/', (req,res)=>{
//     res.send("working..")
// })


module.exports = router;