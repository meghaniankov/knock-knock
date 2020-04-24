import React, {Fragment} from 'react'
import StatusContainer from './StatusContainer'
import UserAuth from './users/UserAuth'

class UserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  componentDidMount() {

  }

  render() {
    return(
    <Fragment>
      <div className='container'>
        <UserAuth />
        <StatusContainer />
      </div>
    </Fragment>
    )
  }
  
}

export default UserContainer