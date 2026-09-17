import {db} from "./dbconnection.js"

const collection = db.collection("test_mid")

async function(email) {
    const user = await collection.findOne({email :  email})
}



