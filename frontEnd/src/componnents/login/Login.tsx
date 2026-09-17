import axios from "axios"
import { useRef, useState } from "react"
import { Navigate } from "react-router"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import "./login.css"

type myResponse = {
    result : string,
    message : string,
    email : string
}

export default function Login() {
    const navigate = useNavigate()
    const [errorMessage , setErrorMessage] = useState<string | null>(null)
    const email = useRef<string>("")
    const password = useRef<string>("")
    
    async function  handelSubmission() {
        const userObject = {
        email : email.current,
        password : password.current
    }
        const response : myResponse = await axios.post("http://localhost:3010/login" , userObject)
        if(!response.result) {setErrorMessage(response.message)}
        else {
            localStorage.setItem("token", response.result),
            console.log(response.result),
            localStorage.setItem("userEmail", response.email),
            navigate("/profile")
        }
    }
  return (
    <div className="mainLogin">
        <h1 className="headlineLog">welcome tp login page</h1>
        <div className="userFormLog">
            <input className="inputPlaceLog" onChange={(e) => email.current = e.target.value} type="email" placeholder="enter email" required/>
            <input className="inputPlaceLog" onChange={(e) => password.current = e.target.value} type="text" placeholder="enter password" required/>
            <button className="buttonSendLog" onClick={handelSubmission}>send</button>
        </div>
        <div className="bottomMain">
            <p className="pToReg">if you haven't register yet press the link to register page</p>
            <Link className="linkToReg" to={"/register"}>register</Link>
        </div>
        <div>{errorMessage?  errorMessage : null}</div>
    </div>
  )
}
