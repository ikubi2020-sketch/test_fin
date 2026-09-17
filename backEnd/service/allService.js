import {addUser, findByEmail} from "../dal/dbAction.js"
import {createToken} from "../middelware/authMiddleware.js"

export async function registerServ(user) {
    try {
        const userResult = await addUser(user)
        return userResult 
    } catch (error) {
        throw error
    }
}

export async function loginServ(user) {
    const myUser = user
    try {
        const token = createToken(myUser)
        return token
    } catch (error) {
        throw error
    }
}

export async function profileServ(user) {
    const userEmail = user.payLoad.email
    console.log(userEmail)
    try {
        const userResult = await findByEmail(userEmail)
        console.log(userResult)
        
        return userResult 
    } catch (error) {
        throw error
    }
}


