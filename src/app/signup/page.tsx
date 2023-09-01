"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import {axios} from "axios"

export default function signup (){
const [user,setUser]=React.useState({
    email:"",
    password: "",
    username:""
})

const onSignup=async ()=>{

}
    return (

        <div className="grid justify-items-center">
            <div className="border-2 p-10">
       <p className="text-center">Signup</p>
    <p>   <label   htmlFor="username">User name</label></p>
       <input type="text" id="username"
       value={user.username} 
       onChange={(e)=>setUser({...user,username:e.target.value})}
       placeholder="User name"
        />
    <p>   <label   htmlFor="email">Email</label></p>
       <input type="email" id="email"
       value={user.email} 
       onChange={(e)=>setUser({...user,email:e.target.value})}
       placeholder="email"
        />
    <p>   <label   htmlFor="password">password</label></p>
       <input type="password" id="password"
       value={user.password} 
       onChange={(e)=>setUser({...user,password:e.target.value})}
       placeholder="password"
        />
        <p><button onClick={signup}>Sign up</button></p>
    <p>    <Link href='/login'>Visit log in page</Link></p>


        </div>
        </div>
    )
}