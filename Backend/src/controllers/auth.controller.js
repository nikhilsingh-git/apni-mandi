const User = require('../models/auth.model')
const bcrypt = require("bcrypt")

const register = async(req, res) =>{

    try {
    
        const {name , email , password , phone , role} = req.body

        if(!name || !email || !password || !role ){
           return res.status(401).json({
                success:false,
                message:"All Data is required!"
            })
        }

    const hash = await bcrypt.hash(password , 10)

        const user = await User.create({
            name,
            email,
            password:hash,
            phone,
            role 
        })

      if(!user){
       return res.status(404).json({
            success:false,
            message:"User is not Register!"
        })
      }  

    const token = user.generateAuthToken()
    
    res.cookie("token" , token )
    
    res.status(201).json({
        success:true,
        message:"User register successfully!",
        user,
        token
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Somthing want worng!",
            error : error.message
        })
    }
}

const login = async(req, res) =>{
    try {
        const {email , password} = req.body
        if( !email || !password ){
           return res.status(401).json({
                success:false,
                message:"All data is required!"
            })
        }

        const user = await User.findOne({email})

        if(!user){
         return res.status(404).json({
            success:false,
            message:" Invalid email or password!"
        })
      }  

    const comparePassword = await bcrypt.compare(password , user.password)
    
    if(!comparePassword){
        return res.status({
            success:false,
            message:"Invalid email or password!"
        })
    }

    const token = user.generateAuthToken()
    
    res.cookie("token" , token )
    
    res.status(201).json({
        success:true,
        message:"User login successfully!",
        user,
        token
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Somthing want worng!",
            error : error.message
        })
    }
}

module.exports = {register , login}