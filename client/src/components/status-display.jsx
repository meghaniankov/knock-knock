import React from 'react'
 
const StatusDisplay = ({status}) => {

   return (
      <div className="card" style={{backgroundColor: status}}>
        <div className="card-body">
          {status}
        </div>
      </div>
   )
}

export default StatusDisplay
