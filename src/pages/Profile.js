import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import buttonHome from '../components/buttonHome'

const Profile = () => {
  const [profileUser, setProfileUser] = useState([])

  const getUserProfile = async () => {
    const { data } = await axios.get('https://www.mecallapi.com/api/users')
    setProfileUser(data)
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <div>
      {/* <buttonHome /> */}
      {profileUser.length &&
        profileUser.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt="user-avatar" />

            <h2>
              {user.fname} {user.lname}
            </h2>
            <p>Email: {user.username}</p>
          </div>
        ))}
    </div>
  )
}

export default Profile
