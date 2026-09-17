import { type ReactNode } from "react";
import { Navigate } from "react-router";

type propsChildren = {
    Children : ReactNode
}

export const protectedRote = ({Children} : propsChildren) =>{
    const token = localStorage.getItem("token")
    if(!token){
        <Navigate to="./login" />
    }
    return Children
}