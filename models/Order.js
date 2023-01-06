const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quqntity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        amount: { type: Number, required: true },
        address: { type: Object },
        status: {type: String, default : "Pending"},
    }, { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);



