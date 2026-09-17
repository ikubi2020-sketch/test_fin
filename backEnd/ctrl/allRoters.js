import express from "express"
import {validationLogin,validationRegister} from "../middelware/authMiddleware.js"

const route = express.Router()

route.use("/register",validationRegister, ()=>{})

route.use("/login",validationLogin, ()=>{})

route.use("/profile", ()=>{})

export { route}