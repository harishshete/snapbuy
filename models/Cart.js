const mongoose = require("mongoose");



const CartSchema = mongoose.Schema(
    {
        userid: {
            type: String,
            required: true
        },
        products: [
            {
                productid: {
                    type: String,
                    required: true
                },
                size: {
                    type: String
                },
                color: {
    
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]

    }, { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);



