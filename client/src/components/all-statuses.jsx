import React, { useEffect } from 'react'

const DisplayStatus = (user) => {
  const username = user.username
  const status = user.status

  return (
    <div>
      {username} -- {status}
    </div>
  )
}
 
const AllStatuses = () => {
   const [users, setUsers] = React.useState([])

   const getData = async() => {
    const response = await fetch('http://localhost:5000/users/')
    const data = await response.json()
    setUsers(data)
   }

   useEffect(() => {
    getData()
   }, [])
   
   return (
     <div>
       {users.map((user) => DisplayStatus(user))}
     </div>
   )
}

export default AllStatuses
