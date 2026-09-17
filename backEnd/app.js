import dotenv from "dotenv/config"
import express from "express"
import {route} from "./ctrl/allRoters.js"
import cors from "cors"
const PORT = process.env.PORT || 3010

const app = express()

app.use(cors())

app.use(express.json())

app.use("/", route)

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
})