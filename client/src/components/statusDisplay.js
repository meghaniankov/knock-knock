import React from 'react'

class StatusDisplay extends React.Component {

  getStyle = () => {
    return {
      backgroundColor: this.props.status,
    }
  }

  
  render() {
    return(
      <div className="card" style={this.getStyle()}>
        <div className="card-body">
          {this.props.status}
        </div>
      </div>
    )
  }
  
}

export default StatusDisplay