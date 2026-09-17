import {loginServ, profileServ, registerServ} from "../service/allService.js"

export async function registerCtrl(req, res, next) {
    const user = req.params
    try {
        const resultRegister = await registerServ(user)
        res.status(201).json({result : `user added successful` }) 
    } catch (error) {
        next(error)
    }
}

export async function loginCtrl(req, res, next) {
    const user = req.body
    try {
        const resultLoginToken = await loginServ(user)
        res.status(200).json({result : resultLoginToken }) 
    } catch (error) {
        next(error)
    }
}

export async function profileCtrl(req, res, next) {
    const user = req.body
    try {
        const resultProfile = await profileServ(user)
        res.status(200).json(resultProfile) 
    } catch (error) {
        next(error)
    }
}