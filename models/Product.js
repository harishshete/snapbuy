const mongoose = require("mongoose");



const ProductSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        category: {type: String, required: true},
        color: {type: String, required: true},
        size: {type: Boolean, default: false},
        prize: {type: Number, required: true},
    }, {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);



