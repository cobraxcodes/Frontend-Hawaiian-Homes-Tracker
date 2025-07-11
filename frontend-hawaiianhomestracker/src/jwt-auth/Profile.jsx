import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";


export default function Profile(){
    const {setUsername,setPassword,setLogin}=useContext(Context)
    const navigate = useNavigate()

        function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setLogin(false)
        setUsername("")
        setPassword("")
        navigate('/')
    }
    return(
        <>
           <h1>This is profile!</h1>
        <button onClick={handleLogout} className="text-red-500">Logout</button>
        </>
     
    )
}

