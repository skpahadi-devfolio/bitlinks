import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    let data =  await request.json()
    const client = await clientPromise;
    const db = client.db("Bitlinks");
    const collection = db.collection("contacts");
    
    await db.collection("contacts").insertOne(data)

    return NextResponse.json({success: true, error: false, message: "Your message sent succesfully"})
}