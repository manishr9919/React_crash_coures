import React, { useContext } from 'react'
import { Authcontext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const {authState:{isAuthenticated}} = useContext(Authcontext)

  return isAuthenticated ? children : <Navigate to={'/login'}/>
}
