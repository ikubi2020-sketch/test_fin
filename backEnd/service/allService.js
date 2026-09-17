import {addUser, findByEmail} from "../dal/dbAction.js"
import {createToken} from "../middelware/authMiddleware.js"
import {clearUser} from "../utils/utils.js"

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
    try {
        const userResult = await findByEmail(userEmail)
        const cleanUser = clearUser(userResult)        
        return cleanUser 
    } catch (error) {
        throw error
    }
}


