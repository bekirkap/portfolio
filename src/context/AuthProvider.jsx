import React from "react"
import { createContext, useState, Children} from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()




const AuthProvider = ({children}) => {
  const [user, setUser]= useState()
  const navigate = useNavigate()

  const login = (info) => {
    setUser(info)
    navigate("/dashboard")
   }
   const logout = () =>{
    setUser(false)
   }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

