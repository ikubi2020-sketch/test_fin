import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL)

try {
    await client.connect()
    console.log("mongo db connected")
} catch (error) {
    console.log(error)
    process.exit(1)
}

export const db = client.db("test_fin_db")