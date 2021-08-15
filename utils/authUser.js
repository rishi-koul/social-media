import axios from "axios"
import baseUrl from "./baseUrl"
import catchErrors from "./catchErrors"
import Router from "next/router"
import cookie from "js-cookie"

const setToken=token=>{
    cookie.set('token', token)

    Router.push("/")
}

export const registerUser=async(user, profilePicUrl, setError, setLoading)=>{
    try{
        const res = await axios.post(`${baseUrl}/api/signup`, {user, profilePicUrl})

        setToken(res.data)
    }catch(err){
        setError(catchErrors(err))
    }
}

export const loginUser=async(user, setError, setLoading)=>{

    try{
        const res = await axios.post(`${baseUrl}/api/auth`, {user})

        console.log(res.data);
        setToken(res.data)
    }catch(err){
        setError(catchErrors(err))
    }
}

export const redirectUser=(ctx, location)=>{
    if(ctx.req){
        ctx.res.writeHead(302, {Location:location})
        ctx.res.end()
    }else{
        Router.push(location)
    }
}

export const logoutUser=email=>{
    cookie.set('userEmail', email)
    cookie.remove('token')
    Router.push("/login")
}


