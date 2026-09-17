import { useState } from "react"
import axios from "axios"

type myUser = {
    result : string,
    message : string,
    username : string,
    email : string,
    id :  string
}

type userState = {
    username : string,
    email : string,
    id :  string
}


export default function Profile() {
    const [user , setUser] = useState<userState | null>()
    const [errorMessage , setErrorMessage] = useState<string | null>(null)
    

    async function  handelSubmission() {
        const email =  localStorage.getItem("userEmail")
        const token = localStorage.getItem("token")
        const response : myUser  = await axios.get(`http://localhost:3010/profile/${email}` ,{headers: {Authorization : `bearer ${token}`}})

        if(!response.result) {setErrorMessage(response.message)}
        else {
            setUser(response)
        }
    }
 
  return (
    <>
    <button onClick={handelSubmission}>press here to get your profile</button>
    <div>
        <div>{`your name is : ${user?.username}`}</div>
        <div>{`your email is :  ${user?.email}`}</div>
        <div>{`your id is : ${user?.id}`}</div>
    </div>
    <div>{errorMessage?  errorMessage : null}</div>
    </>
  )
}
