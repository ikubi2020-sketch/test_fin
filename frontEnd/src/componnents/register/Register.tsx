import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import "./register.css"

type myResponse = {
    result : string,
    message : string
}
export default function Register() {
    const navigate = useNavigate()
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
        navigate("/login")
    }
  return (
    <div className="mainRegister">
        <h1 className="headlineReg">welcome to Register page</h1>
        <div className="userForm">
            <input className="inputPlace" onChange={(e) => username.current = e.target.value} type="text" placeholder="enter username" required/>
            <input className="inputPlace" onChange={(e) => email.current = e.target.value} type="email" placeholder="enter email" required/>
            <input className="inputPlace" onChange={(e) => password.current = e.target.value} type="text" placeholder="enter password" required/>
            <button className="buttonSend" onClick={handelSubmission}>send</button>
        </div>
        <div>{errorMessage?  errorMessage : null}</div>
    </div>
  )
}
