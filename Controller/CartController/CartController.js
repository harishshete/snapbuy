const Cart = require('../../models/Cart');
const { findByIdAndUpdate } = require('../../models/Seller');


// Add Product to the Cart
exports.addproduct = async (req, res) => {
    const newItem = new Cart({
        userid: req.user.id,
        productid: req.body.productid,
        products: req.body.products
    });

    try {
        const returnedItem = await newItem.save()
        res.status(200).json(returnedItem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.removeProduct = (req, res) => {




    // res.json("Request for RemoveProductFromCart");
}

exports.getAllProducts = (req, res) => {

}

exports.updateProductQuantity = async (req, res) => {

    const cart = await Cart.findOne({ userid: req.user.id }, { _id: 1 })
    console.log(cart._id);
    try {
        Cart.findByIdAndUpdate(cart._id, {
            $set: req.body
        }, { new: true });
    } catch (error) {

    }
    // if(cart){

    // }


    // res.json("Request for UpdateProductQuantity");
}



