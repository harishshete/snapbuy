const Product = require('../../models/Product');
const fs = require("fs");

exports.addProduct = async (req, res) => {
    url = req.protocol + '://' + req.get("host") + '/productImages/' + req.file.filename;
    console.log(req.params.id);
    const product = new Product({
        sellerid: req.params.id,
        title: req.body.title,
        summary: req.body.summary,
        category: req.body.category,
        shop: req.body.shop,
        instock: req.body.instock,
        size: req.body.size.split(" "),
        color: req.body.color.split(" "),
        price: req.body.price,
        image: url
    });

    try {
        console.log(product);
        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).json("Could Not Add product " + error)
    }

}

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({ sellerid: req.params.id });
        res.status(200).send(allProducts);
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.getProductsWithFilter = async (req, res) => {

    res.json("Request for Add Product");
}


exports.deleteProduct = async (req, res) => {

    const imgURL = await Product.findOne({ _id: req.params.id }, { _id: 0, image: 1 });
    const arr = imgURL.image.split("/");
    // res.send();
    const imageName = arr[arr.length - 1];


    try {
        await Product.findByIdAndDelete(req.params.id, (err, docs) => {
            if (err) {
                res.status(500).json(err);
            } else {
                fs.unlink(`productImages/${imageName}`, (err) => {
                    if (err) {
                        // throw err;
                        res.status(500).json(err);
                    } else {
                        res.status(200).json("Deleted");
                    }
                });
            }
        })

    } catch (error) {

    }







}


exports.updateProduct = async (req, res) => {
    const SellerWhoRequestedUpdate = req.user.id;
    const sellerIdFromProduct = await Product.findOne({ _id: req.params.id }, { _id: 0, sellerid: 1 });
    if (sellerIdFromProduct.sellerid == SellerWhoRequestedUpdate) {
        if (req.body.size) {
            req.body.size = req.body.size.split(" ");
        }
        if (req.body.color) {
            req.body.color = req.body.color.split(" ");
        }
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json("Could Not Update " + error)
        }
    }
    else {
        res.status(500).json("You Don't have permission to Update This Product");
    }
}











