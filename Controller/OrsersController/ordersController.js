

exports.createOrder = async (req, res)=>{

    res.json("Request for Create Order");
}


exports.cancelOrder = async (req, res)=>{

    res.json("Request for CancelOrders");
}


exports.returnOrder = async (req, res)=>{

    res.json("Request for returnOrder");
}


exports.getAllOrders = async (req, res)=>{

    res.json("Request for GelAllOrders");
}


// Fetch orders from orders table that matches a specific seller id and the given Filters 
exports.getOrdersForSeller = async (req, res)=>{

    res.json("Request for Gel All Orders for Seller with Filter");
}


