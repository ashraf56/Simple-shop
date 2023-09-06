import { ConnectMongo } from "@/lib/db";
import { Alluser } from "@/lib/modal/alluser";
import { NextResponse } from "next/server";


export async function PUT(request,{params}) {
    let {id}=params;

    const {
        Newrole:role
    }= await request.json()
    await ConnectMongo();
    await Alluser.findByIdAndUpdate(id,{role})
    return NextResponse.json({message:"update info"})
}

export async function PATCH(request,{params}) {
    let {id}=params;

    const {
        Newrole:role
    }= await request.json()
    await ConnectMongo();
    await Alluser.findByIdAndUpdate(id,{role})
    return NextResponse.json({message:"Patchupdate info"})
}

export async function GET(request,{params}) {
    const {id}=params;
    await ConnectMongo();
    const user= await Alluser.findOne({_id:id})
    return NextResponse.json({user})
}
