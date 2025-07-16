import { useContext, useState } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";


export default function Signup(){
    const{username,setUsername,password,setPassword}=useContext(Context)
    const[signupErr, setSignupErr]=useState("")
    const navigate = useNavigate()
   

    const handleSignup = async(e) =>{
        e.preventDefault()
        try{
            if(username.length < 6){
                setSignupErr("Usernames must have at least 6 characters")
                return;
            }
            if(password.length < 8){
                setSignupErr("Passwords must have at least 8 characters")
                return;
            }
            const URL = "https://hawaiian-homes-tracker.onrender.com/applications/signup"
            const res = await axios.post(URL, {
                username, password
            },{
                headers:{
                    'Content-type': 'application/json'
                }
            })
            toast.success('User successfully created! Redirecting you to the login page ... ')
            setTimeout(() =>{
                navigate('/login')
            }, 4000)
            
        }catch(err){
            setSignupErr("Unable to signup right now. Please try again later")
        }
    }
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
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
                data-cy = "signup-btn"
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account? {""}
            <a href="/login" className="font-semibold text-green-600 hover:text-green-800">
              Login Here
            </a>
          </p>
          <br/>
          {signupErr && <p className="text-center text-red-500" >{signupErr}</p>}
        
        </div>
        <ToastContainer/>
      </div>
    )
}