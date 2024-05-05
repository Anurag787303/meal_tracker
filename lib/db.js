import mongoose from "mongoose"

const username = process.env.NEXT_PUBLIC_USERNAME
const password = process.env.NEXT_PUBLIC_PASSWORD
const connectionString = `mongodb+srv://${username}:${password}@mongo-cloud.qk5culd.mongodb.net/meal_tracker?retryWrites=true&w=majority`

let cachedDb = null

export async function connectToDatabase() {
    if (cachedDb) {
        return { db: cachedDb }
    }

    const client = await mongoose.connect(connectionString)

    const db = client.connection.db

    cachedDb = db

    return { db }
}