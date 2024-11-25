import React from 'react'
import { createContext,useState } from 'react'

export const Authcontext = createContext()
export default function AuthcontextProvider({children}) {
const [authState, setauthState] = useState({ isAuthenticated: false, token: null, email: null })
console.log(authState)
const login = (token,email)=>{
    setauthState({ isAuthenticated: true, token: token, email: email })
}

const logOut = ()=>{
    setauthState({ isAuthenticated: false, token: null, email: null })
}


  return (
   <Authcontext.Provider value={{authState,login,logOut}}>
    {children}
   </Authcontext.Provider>
  )
}
