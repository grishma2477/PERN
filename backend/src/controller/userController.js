import asyncHandler from "../middleware/asyncHandler.js"
import User from "../model/user/user.js"

export const registerUser = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name,email,password} = req.body;

    const newUser = await User.create({
        name,
        email,
        password
    })
    res.status(201).json({"success":true,message:"User Create Successfully",data:newUser})
});