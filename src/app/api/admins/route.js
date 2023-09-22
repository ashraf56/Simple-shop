import { ConnectMongo } from "@/lib/db"
import { Alluser } from "@/lib/modal/alluser"
import { NextResponse } from "next/server"
export const revalidate = 0;
export async function GET() {
    await ConnectMongo()
    const user= await Alluser.find({role:'admin'})
    
    
        return NextResponse.json({ user })
    } 
