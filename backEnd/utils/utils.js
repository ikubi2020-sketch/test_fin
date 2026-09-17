


export function clearUser(user) {
    const cleanUser = user.result
    cleanUser.id = cleanUser._id
    delete cleanUser._id
    delete cleanUser.userHash
    return cleanUser
}