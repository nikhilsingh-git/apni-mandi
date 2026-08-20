const Product = require("../models/products.model");

const addProducts = async (req, res) => {
  try {
    const {
      productName,
      category,
      price,
      quantity,
      unit,
      productImage,
      description,
      location,
      harvestDate,
      isAvailable,
    } = req.body;

    const userId = req.user.id;

    if (
      !productName ||
      !category ||
      !price ||
      !quantity ||
      !unit ||
      !productImage
    ) {
      return res.status(401).json({
        success: false,
        message: "All field are required!",
      });
    }

    const product = await Product.create({
      farmer: userId,
      productName,
      category,
      price,
      quantity,
      unit,
      productImage,
      description,
      location,
      harvestDate,
      isAvailable,
    });

    if (!product) {
      return res.statud(404).json({
        success: false,
        message: "Somthing want worng, Product not Added!",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Product add successfully!",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const userId = req.user.id;

    const product = await Product.find({ farmer: userId });

    if (!product) {
      return res.sratus(401).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product are there!",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id
    const userId = req.user.id

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Product not found. Please try refreshing the page.",
      });
    }

    const singleProduct = await Product.findById({
      _id:id ,
      farmer:userId
    });

    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        messagee: "Product not found!",
      });
    }

    return res.status(201).json({
      success: true,
      message: "product found!",
      singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const userId = req.user.id

    const {
      productName,
      category,
      price,
      quantity,
      unit,
      productImage,
      description,
      location,
      harvestDate,
      isAvailable,
    } = req.body;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Please try refreshing the page.",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      {
        _id:id,
        farmer:userId
      },
      {
        productName,
        category,
        price,
        quantity,
        unit,
        productImage,
        description,
        location,
        harvestDate,
        isAvailable,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product are not updated!",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Product updated successfully!",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
  }
};

const deleteProduct = async(req ,res)=>{
    try {
        const id = req.params.id
        const userId = req.user.id

        if (!id) {
            return res.status(404).json({
            success: false,
            message: "Product not found. Please try refreshing the page.",
            });
        }

        const deleteProduct = await Product.findByIdAndDelete(
            {
            _id:id,
            farmer:userId
            },
            {
            new:true,
            runValidators:true
            }
        )

        if(!deleteProduct){
            return res.status(401).json({
                success:false,
                message:"Product not deleted!"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Product deleted successfully!",
            deleteProduct
        })
    
    } catch (error) {
      return res.status(500).json({
      success: false,
      message: "Somthing want worng!",
      error: error.message,
    });
    }
}

module.exports = { addProducts, getProducts, getSingleProduct ,updateProduct,deleteProduct};
