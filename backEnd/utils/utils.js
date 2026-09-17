
export function logger(req, res , next) {
    console.log(req.url, req.method)
    next()
}

export function clearUser(user) {
    const cleanUser = user
    cleanUser.id = cleanUser._id
    delete cleanUser._id
    delete cleanUser.userHash
    return cleanUser
}