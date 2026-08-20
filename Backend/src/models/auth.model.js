const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["farmer", "consumer"],
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },


////////////////////////////////



    profileImage: {
      type: String,
      default: "",
    },
    
    farmName: {
      type: String,
      default: "",
    },

    farmSize: {
      type: Number,
      default: 0,
    },

    farmSizeUnit: {
      type: String,
      enum: ["acre", "hectare"],
      default: "acre",
    },

    crops: [
      {
        type: String,
        trim: true,
      },
    ],

    // location 
    location: {
      address: {
        type: String,
        default: "",
      },

      city: {
        type: String,
        default: "",
      },

      state: {
        type: String,
        default: "",
      },

      latitude: {
        type: Number,
        default: null,
      },

      longitude: {
        type: Number,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);


userSchema.methods.generateAuthToken = function(){
    const accessToken = jwt.sign({
        id: this._id,
        role:this.role
    }, process.env.JWT_SECRET ,
  {expiresIn:"1d"})

  return accessToken
}

const User = mongoose.model("User", userSchema);

module.exports = User