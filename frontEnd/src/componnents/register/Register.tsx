import axios from "axios"
import { useRef, useState } from "react"
import { Navigate } from "react-router"

type myResponse = {
    result : string,
    message : string
}
export default function Register() {
    const [errorMessage , setErrorMessage] = useState<string | null>(null)
    const username = useRef<string>("")
    const email = useRef<string>("")
    const password = useRef<string>("")
    
    async function  handelSubmission() {
        const userObject = {
        username : username.current,
        email : email.current,
        password : password.current
    }
        const response : myResponse = await axios.post("http://localhost:3010/register" , userObject)
        if(!response.result) {setErrorMessage(response.message)}
        else {
            <Navigate to="./login" />
        }
    }
  return (
    <div>
        <div>
            <input onChange={(e) => username.current = e.target.value} type="text" placeholder="enter username" required/>
            <input onChange={(e) => email.current = e.target.value} type="email" placeholder="enter email" required/>
            <input onChange={(e) => password.current = e.target.value} type="text" placeholder="enter password" required/>
            <button onClick={handelSubmission}>send</button>
        </div>
        <div>{errorMessage?  errorMessage : null}</div>
    </div>
  )
}
