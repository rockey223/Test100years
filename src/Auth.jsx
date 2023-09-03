import React from 'react'
import { useUser } from './contexts/userDetails/userContext'
import { Navigate } from 'react-router-dom';
import {Outlet} from "react-router-dom";
const Auth = () => {
const {isloggedIn} = useUser();

  return (
    <>
    {
        isloggedIn && <Outlet/>
    }
</>
  )
}

export default Auth