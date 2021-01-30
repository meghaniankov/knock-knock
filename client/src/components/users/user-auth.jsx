import React from 'react'
import axios from 'axios'

 
const UserAuthentication = () => {
   const [username, setUsername] = React.useState('')

   const onChangeUsername = (e) => {
      const { value } = e.target
      setUsername(value)
   }

   const onSubmit = () => {
     axios.post('http://localhost:5000/users/', {username: username})
   }

   return (
    <form class="form-inline" onSubmit={() => onSubmit()}>
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <input 
        type="text" 
        class="form-control" 
        value={username}
        onChange={onChangeUsername}
        id="inlineFormInputGroupUsername2" 
        placeholder="Username" />
      <button type="submit" class="btn btn-primary mb-2">Log In</button>
      <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
    </form>

   )
}

export default UserAuthentication
