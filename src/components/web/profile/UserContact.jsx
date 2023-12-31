import React, { useContext } from 'react'
import { UserContext } from '../context/User'

export default function UserContact() {

    const {userData,loading} = useContext(UserContext);

    if(loading){
        return <p>loading ...</p>
    }
  return (
    <div>
        <h2>{userData.email}</h2>
    </div>
  )
}
