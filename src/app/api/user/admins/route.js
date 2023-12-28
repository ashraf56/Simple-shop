import { ConnectMongo } from "@/lib/db";
import { Alluser } from "@/lib/modal/alluser";
import { NextResponse } from "next/server";
export async function GET() {
    await ConnectMongo()
    const admins = await Alluser.find({ role: 'admin' })
    return NextResponse.json(admins)
} 