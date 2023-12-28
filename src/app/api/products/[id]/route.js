import { ConnectMongo } from "@/lib/db";
import { Allproduct } from "@/lib/modal/product";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newproduct_name: product_name,
        newdescription: description,
        newPrice: price,
        newcategory: category,
        newstock_quantity: stock_quantity
    } = await request.json();
    await ConnectMongo();
    await Allproduct.findByIdAndUpdate(id, { product_name, description, price, category, stock_quantity });
    return NextResponse.json({ message: "Updated" })
}
export async function GET(request, { params }) {
    const { id } = params;
    await ConnectMongo();
    const product = await Allproduct.findOne({ _id: id })
    return NextResponse.json({ product })
}
