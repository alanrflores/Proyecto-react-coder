import React, {useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import { Navigate } from 'react-router-dom'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }) => {
  const { users, loading } = useContext(UserContext)
 

   if(loading){
     return <Loading />
   }

  if(!users){
      return <Navigate to="/login" />
  }

  return <>{children}</>  ;
}

export default RequireAuth
