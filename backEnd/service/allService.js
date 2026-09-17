import {addUser, findByEmail} from "../dal/dbAction.js"

export async function registerServ(user) {
    try {
        const userResult = await  addUser(user)
        return userResult 
    } catch (error) {
        throw error
    }
}

export async function loginServ(params) {
    try {
        
    } catch (error) {
        throw error
    }
}

export async function profileServ(params) {
    try {
        
    } catch (error) {
        throw error
    }
}


