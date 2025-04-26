import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from 'validator'
import UserModel from '../models/UserModel.js';



const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const Register = async (req,res)=>{
    
    const name = req.body.name; 
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    try{
        const exist = await UserModel.findOne({email})
        if(exist){
            res.json({success:false,message:" User already exists "})
        }
        if(!validator.isEmail(email)){
            res.json({success:false,message:" Invalid email format "})
        }
        if(password.length<0){
            res.json({success:false,message:"Password must be at least 8 characters long"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newuser = new UserModel({
            name, email, password: hashedPassword, role
        })

        const user = await newuser.save();
        const token = createToken(user._id);

        res.json({success:true,token})
    }
    catch(error){
        console.error(error)
        res.json({success:false,message:"error"})
    }
}

const login = async (req,res)=>{
    const { email, password } = req.body;
    try{
       const user = await UserModel.findOne({ email });
    if (!user) {
        res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.json({ success: false, message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token, role:user.role }); 
    }
    catch(error){
        res.json({success:false,message:"error"})
    }
}



export { Register ,login }