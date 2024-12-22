
import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)   //to take the data we use user and not setuser
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile