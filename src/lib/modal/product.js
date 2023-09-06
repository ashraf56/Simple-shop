import mongoose from "mongoose"



const productModal=new mongoose.Schema({

    product_name:String,
    description:String,
    price:String,
    category: String,
    stock_quantity:String


})

export const Allproduct= mongoose.models.allproducts || mongoose.model("allproducts",productModal)