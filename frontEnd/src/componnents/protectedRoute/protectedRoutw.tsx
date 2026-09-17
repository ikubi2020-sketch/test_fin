import { type ReactNode } from "react";
import { Navigate } from "react-router";

type propsChildren = {
    children : ReactNode
}



export const ProtectedRote = ({children} : any) =>{
    const token = localStorage.getItem("token")
    if(!token){
        <Navigate to="/login" />}
    return children
}