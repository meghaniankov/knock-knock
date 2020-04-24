import React, {Fragment} from 'react'
import axios from 'axios'
import StatusDisplay from './StatusDisplay'
import StatusChoice from './UpdateStatus';


class StatusContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
  }

  componentDidMount() {
    console.log(this.state)
    this.getState()
  }

  getState = () => {
    axios.get('http://localhost:5000/users/1')
      .then(response => {
        this.setState({
          status: response.data.status,
        })
      })
  }


  render() {
    return(
    <Fragment>
      <div className='container'>
        <StatusDisplay status={this.state.status} />
        <StatusChoice color='green' getState={this.getState}/>
        <StatusChoice color='yellow' getState={this.getState}/>
        <StatusChoice color='red' getState={this.getState}/>
      </div>
    </Fragment>
    )
  }
  
}

export default StatusContainer