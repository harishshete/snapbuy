const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const productsController = require('../Controller/ProductsController/productsController');
const upload = require("../Service/upload");


router.get('/getproducts:id', productsController.getAllProducts); 
router.get('/getproductswithfilter', productsController.getProductsWithFilter);
router.delete('/delete:id', productsController.deleteProduct);
router.put('/update:id', authControler.verifyAndAuthorizeSeller, productsController.updateProduct);

router.get("/form", (req, res) => {
    res.render("form");
});


router.post('/add:id', upload.single('productImage'), productsController.addProduct);

module.exports = router;