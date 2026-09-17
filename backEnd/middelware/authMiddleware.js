import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {findByEmail} from "../dal/dbAction.js"

export function hashPassword(password) {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

export function comparePassword(password , hashPassword) {
    const resultCompare = bcrypt.compareSync(password , hashPassword)
    return resultCompare 
}

export function createToken(payLoad) {
    const token = jwt.sign({payLoad}, process.env.JWT_KEY, {expiresIn : process.env.JWT_EXPIRE_IN})
    return token
}

export function checkToken(payLoad) {
    const cleanPayload = jwt.verify(payLoad, process.env.JWT_KEY)
    return cleanPayload
}

export async function validationRegister(req, res, next) {
    const userDetails = req.body
    const isExists = await findByEmail(userDetails.email)
    if(isExists){return res.status(409).json({message :  "user already exists"})}
    const hash = hashPassword(userDetails.password)
    req.body.userHash = hash
    delete req.body.password
    next()
}

export async function validationLogin(req, res, next) {
    const userDetails = req.body
    const isExists = await findByEmail(userDetails.email)
    if(!isExists){return res.status(400).json({message :  "user not found"})}
    const isValidPassword = comparePassword(userDetails.password, isExists.userHash)
    if(!isValidPassword){return  res.status(400).json({message :  "password is not correct"})}
    next()
}
export async function validationProfile(req, res, next) {
    const userDetails = req.body
    const isExists = await findByEmail(userDetails.email)
    if(!isExists){return res.status(400).json({message :  "user not found"})}

    const token = req.headers.authorization.split("Bearer ")[1]
    if(!token) {return  res.status(400).json({message : "missing headers"})}

    const cleanPayload = checkToken(token)
    if(!cleanPayload){return  res.status(400).json({message :  "missing right headers"})}
    console.log(cleanPayload)
    req.body = cleanPayload
    next()
}