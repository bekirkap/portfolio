import React, { useEffect } from "react"
import { createContext, useState, Children} from "react"
import { json, useNavigate } from "react-router-dom"

export const AuthContext = createContext()




const AuthProvider = ({children}) => {
  const [user, setUser]= useState(JSON.parse(sessionStorage.getItem("user")) || false)
  const navigate = useNavigate()

  const login = (info) => {
    setUser(info)
    navigate("/dashboard")
   }
   const logout = () =>{
    setUser(false)
   }
   useEffect(()=>{
    sessionStorage.setItem("user", JSON.stringify(user))

   }, [user]
  )

  return (
    <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

