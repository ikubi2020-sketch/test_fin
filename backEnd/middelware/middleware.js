

export function createError(statusCode, message) {
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export function errorHandler(err , req , res , next) {
    console.log(err)
    if(err.statusCode){return res.status(err.statusCode).json({"message" : err.message})}
    return res.status(500).json({"message" : "something went wrong"})
}

// fake user 
//  {
//     "username" : "momo",
//     "email": "oslfsdfdsahve@gmail.com",
//     "password": "12dsf3sf678",
//  }