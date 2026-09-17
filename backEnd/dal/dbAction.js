import {db} from "./dbconnection.js"

const collection = db.collection("test_mid")


export async function addUser(user) {
    const userResult = await collection.insertOne(user)
    return userResult
}

export async function findByEmail(email) {
    const user = await collection.findOne({email :  email})
    return user
}

