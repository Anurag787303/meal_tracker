import { connectToDatabase } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    const { db } = await connectToDatabase()

    return NextResponse.json({ result: true })
}