import { Context } from "../Context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Login(){
    const {username,setUsername,password,setPassword,login,setLogin}=useContext(Context)
    const [loginErr, setLoginErr]=useState("")
    const navigate = useNavigate()


    const handleLogin = async(e) =>{
        e.preventDefault()
        try{
            const URL="https://hawaiian-homes-tracker.onrender.com/applications/login"
            const response = await axios.post(URL, {username, password},
                {
                    headers:{
                        'Content-type': 'application/json'
                    }
                }
            )
            setLogin(true)
            const token = response.data.token
            localStorage.setItem('token', token)
            console.log('Token in stored in local storage', localStorage.getItem('token'))
            localStorage.setItem('username', username)
            navigate('/profile')
        }catch(error){
        setLoginErr('Invalid credentials')
    }
}
    return(
        (
        <div className="flex min-h-[calc(90vh-200px)] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-green-600 hover:text-green-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                data-cy = "login-btn"
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account? {""}
            <a href="/signup" className="font-semibold text-green-600 hover:text-green-500">
              Sign up Here
            </a>
          </p>
          <br/>
          {loginErr && <p className="text-center text-red-500">{loginErr}</p>}
        </div>
        
      </div>
    )
    )
    
}