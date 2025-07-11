import { Context } from "../Context";
import { useContext } from "react";
import Login from "./Login";


export default function Protect({children}){
    const {login} = useContext(Context)
    if(!login){
        return <Login />
    }else{
        return children
    }
}