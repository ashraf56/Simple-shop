import { ConnectMongo } from "@/lib/db"
import { Alluser } from "@/lib/modal/alluser"
import { NextResponse } from "next/server"
export async function POST(request) {
    const { name, photo, email, role } = await request.json()
    await ConnectMongo()
    await Alluser.create({ name, photo, email, role })
    return NextResponse.json({ message: 'Created user' })
}
export async function GET() {
    await ConnectMongo()
    const user = await Alluser.find()
    return NextResponse.json({ user })
}
