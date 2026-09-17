import dotenv from "dotenv/config"
import express from "express"
import {route} from "./ctrl/allRoters.js"
import cors from "cors"
import { errorHandler } from "./middelware/middleware.js"
import {logger} from "./utils/utils.js"

const PORT = process.env.PORT || 3010

const app = express()

app.use(logger)

app.use(cors())

app.use(express.json())

app.use("/", route)

app.use(errorHandler)

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
})