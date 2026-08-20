const Order = require("../models/order.model")
const Product = require("../models/products.model")

const addOrder = async(req,res)=>{
    try {
        const userId = req.user.id 
        const {productId , quantity , deliveryAddress} = req.body

        if(isNaN(quantity) || Number(quantity) <= 0){
            return res.status(400).json({
                success:false,
                message: "Enter a valid number in quantity"
            })
        }

        if(!productId || !quantity || !deliveryAddress){
            return res.status(400).json({
                success:false,
                message:"All field are required!"
            })
        }
        
        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({
            success: false,
            message: "Product not found. Please refresh the page and try again."
        });
        }
        const orderQuantity = Number(quantity)

        const farmer = product.farmer
        const price = product.price
        const totalAmount = product.price * orderQuantity 

        const order = await Order.create({
            buyer:userId,
            productId,
            farmer: farmer,
            quantity :orderQuantity,
            price : price,
            totalAmount: totalAmount,
            deliveryAddress
        })

        return res.status(201).json({
            success:true,
            message:"Order create successfully!",
            order
        })

    } catch (error) {
        return res.status(500).json({
            success:true,
            message:"Somthing want worng!",
            error:error.message
        })
    }
}

const getOrder = async (req, res) => {
    try {

        const userId = req.user.id;
        const role = req.user.role;

        let orders;

        if (role === "consumer") {
            orders = await Order.find({
                buyer: userId
            })
            .populate("productId")
            .populate("farmer", "name email")
            .sort({ createdAt: -1 });

        } else if (role === "farmer") {

            orders = await Order.find({
                farmer: userId
            })
            .populate("productId")
            .populate("buyer", "name email")
            .sort({ createdAt: -1 });

        } else {

            return res.status(403).json({
                success: false,
                message: "Invalid user role!"
            });
        }

        if(!orders){
            return res.status(400).json({
                success:false,
                message:"Order not found!"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            orders
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
}

const getSingleOrder = async (req, res) => {
    try {

        const id = req.params.id;
        const userId = req.user.id;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Order ID is required!"
            });
        }

        const singleOrder = await Order.findOne({
            _id: id,
            $or: [
                { buyer: userId },
                { farmer: userId }
            ]
        })
        .populate("productId")
        .populate("buyer", "name email")
        .populate("farmer", "name email");

        if (!singleOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            singleOrder
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
}

const updateOrder = async (req, res) => {
    try {

        const id = req.params.id;
        const userId = req.user.id;
        const role = req.user.role;

        const { status } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Order ID is required!"
            });
        }

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Order status is required!"
            });
        }

        const allowedStatus = [
            "confirmed",
            "processing",
            "shipped",
            "delivered",
            "cancelled"
        ];


        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid order status!"
            });
        }

        if (role !== "farmer") {
            return res.status(403).json({
                success: false,
                message: "Only farmer can update order status!"
            });
        }

        const order = await Order.findOne({
            _id: id,
            farmer: userId
        });


        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found!"
            });
        }

        order.status = status;

        await order.save();
        
        return res.status(200).json({
            success: true,
            message: "Order status updated successfully!",
            order
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
};

module.exports = {addOrder , getOrder , getSingleOrder , updateOrder}