import {loginServ, profileServ, registerServ} from "../service/allService.js"

export function registerCtrl() {
    try {
        const resultRegister = registerServ()
        return resultRegister
    } catch (error) {
        next(error)
    }
}

export function loginCtrl() {
    try {
        const resultLogin = loginServ()
        return resultLogin
    } catch (error) {
        next(error)
    }
}

export function profileCtrl() {
    try {
        const resultProfile = profileServ()
        return resultProfile
    } catch (error) {
        next(error)
    }
}