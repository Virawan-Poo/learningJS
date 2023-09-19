import { useState, useEffect } from 'react'

const Users = () => {
  const [userList, setUserList] = useState([])

  const getUser = async () => {
    const resultUser = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await resultUser.json()
    setUserList(users)
  }

  const deleteUser = (userID) => {
    const updateUser = userList.filter((user) => user.id !== userID)
    setUserList(updateUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length &&
            userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.suite} {user.address.city} {user.address.zipcode}
                </td>
                <td>{user.phone}</td>

                <td>{user.company.name}</td>
                <td>
                  <button type="button" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
