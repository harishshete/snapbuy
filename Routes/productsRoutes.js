const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const productsController = require('../Controller/ProductsController/productsController');


router.post('/add', productsController.addProduct);

router.get('/getproducts', productsController.getAllProducts);

router.get('/getproductswithfilter', productsController.getProductsWithFilter);

router.delete('/delete', productsController.deleteProduct);

router.patch('/update', productsController.updateProduct);

module.exports = router;