import React from 'react'
import axios from 'axios'

class StatusChoice extends React.Component {

  getStyle = () => {
    return {
      backgroundColor: this.props.color
    }
  }

  updateStatus = () => {
    const status = {
      status: this.props.color,
    };

    axios.put('http://localhost:5000/users/1', status);
  };

  handleStatusUpdate =() => {
    this.updateStatus()
    setTimeout(() => {
      this.props.getState()
    }, 100);
    
  }

  render() {
    return(
      <button type="button" className="btn btn-primary"style={this.getStyle()} onClick={this.handleStatusUpdate}>
        Set Status
      </button>

    )
  }
  
}

export default StatusChoice