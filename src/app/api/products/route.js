import { ConnectMongo, connestionSTR } from "@/lib/db";
import { Allproduct, Product } from "@/lib/modal/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(request) {
    const { product_name, description, price, category, stock_quantity } = await request.json()
    await ConnectMongo()
    await Allproduct.create({ product_name, description, price, category, stock_quantity })
    return NextResponse.json({ message: 'Created' })
}
export async function GET() {
    await ConnectMongo()
    const allproduct = await Allproduct.find()
    return NextResponse.json({ allproduct })
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await ConnectMongo();
    await Allproduct.findByIdAndDelete(id)
    return NextResponse.json({ message: "Deleted" })
}