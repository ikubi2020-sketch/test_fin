import express from "express"
import {validationLogin,validationRegister, validationProfile} from "../middelware/authMiddleware.js"
import {loginCtrl,profileCtrl ,registerCtrl} from "./controlers.js"

const route = express.Router()

route.post("/register",validationRegister, registerCtrl)

route.post("/login",validationLogin, loginCtrl)

route.get("/profile",validationProfile, profileCtrl)

export { route}