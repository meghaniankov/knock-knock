import React from 'react'
import axios from 'axios'


class UserAuthentication extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    axios.post('http://localhost:5000/users/', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }


  render() {
    return(
      <form class="form-inline" onSubmit={this.onSubmit}>
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <input 
          type="text" 
          class="form-control" 
          value={this.state.username}
          onChange={this.onChangeUsername}
          id="inlineFormInputGroupUsername2" 
          placeholder="Username" />
        <button type="submit" class="btn btn-primary mb-2">Log In</button>
        <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
      </form>
    )
  }
  
}

export default UserAuthentication