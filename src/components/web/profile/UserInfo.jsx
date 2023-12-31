import React, { useContext } from 'react'
import { UserContext } from '../context/User'

export default function UserInfo() {

    const {userData,loading} = useContext(UserContext);

    if(loading){
        return <p>loading ...</p>
    }
  return (
    <div>
        <h2>{userData.userName}</h2>
        <img src={userData.image.secure_url}/>

    </div>
  )
}
