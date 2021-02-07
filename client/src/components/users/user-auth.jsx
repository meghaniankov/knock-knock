import React, {useEffect} from 'react'
import axios from 'axios'

const UserAuthentication = () => {
  const [username, setUsername] = React.useState('')
  const [users, setUsers] = React.useState([])

  const getData = async() => {
   const response = await fetch('http://localhost:5000/users/')
   const data = await response.json()
   setUsers(data)
  }

  useEffect(() => {
   getData()
  }, [])

  const onChangeUsername = (e) => {
    const { value } = e.target
    setUsername(value)
  }

  const onClickSignUp = () => {
    if (usernameIsValid() && usernameIsUnique()) {
      axios.post('http://localhost:5000/users/', {username: username})
    } else {
      console.log('User already exists')
    }
  }

  const onClickLogIn = () => {
    if (usernameIsUnique() === true) {
      console.log('log me in')
    }
  }

  const usernameIsValid = () => {
    if (username === '') return false
    return true
  }

  const usernameIsUnique = () => {
    let usernameExists = false

    users.map((user) => {
      if (username === user.username) {
        usernameExists = true
      }
    })

    return usernameExists
  }

  return (
    <div>
      <input 
        type="text" 
        class="form-control" 
        value={username}
        onChange={onChangeUsername}
        style={{maxWidth: '250px'}}
        id="inlineFormInputGroupUsername2" 
        placeholder="Username" />
      <button type="submit" class="btn btn-primary mb-2" onClick={() => onClickLogIn()}>Log In</button>
      <button type="submit" class="btn btn-primary mb-2" onClick={() => onClickSignUp()}>Sign Up</button>
    </div>
  )
}

export default UserAuthentication
