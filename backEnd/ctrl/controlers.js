import {loginServ, profileServ, registerServ} from "../service/allService.js"

export async function registerCtrl(req, res) {
    const user = req.body
    try {
        const resultRegister = await registerServ(user)
        res.status(201).json({result : `user added successful` }) 
    } catch (error) {
        next(error)
    }
}

export function loginCtrl(req, res) {
    try {
        const resultLogin = loginServ()
        return resultLogin
    } catch (error) {
        next(error)
    }
}

export function profileCtrl(req, res) {
    try {
        const resultProfile = profileServ()
        return resultProfile
    } catch (error) {
        next(error)
    }
}