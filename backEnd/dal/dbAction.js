import {db} from "./dbconnection.js"

const collection = db.collection("test_mid")


export async function addUser(user) {
    const user = await collection.insertOne(user)
    return user
}

export async function findByEmail(email) {
    const user = await collection.findOne({email :  email})
    return user
}

