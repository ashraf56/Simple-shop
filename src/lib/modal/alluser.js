import mongoose from "mongoose";


const userModal= new mongoose.Schema({
 
    name:String,
    photo:String,
    email:String,
    role:String


})

export const Alluser= mongoose.models.allusers|| mongoose.model("allusers",userModal)
