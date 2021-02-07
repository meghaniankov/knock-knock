import React, { useEffect } from 'react'
import StatusDisplay from './status-display'
import AllStatuses from './all-statuses'
import axios from 'axios'

 
const StatusContainer = () => {
   const [status, setStatus] = React.useState('green')

   const loadStatus = async() => {
     const response = await fetch('http://localhost:5000/users/1')
     const data = await response.json()
     setStatus(data.status)
   }

   const updateStatus = (status) => {
     axios.put('http://localhost:5000/users/1', {status: status})
     setStatus(status)
   }

   useEffect(() => {
    loadStatus()
   }, [])

   return (
      <div>
        <StatusDisplay status={status} />
        <button type="button" className="btn btn-primary" style={{backgroundColor: 'green'}} onClick={() => updateStatus('green')}>
          Set Status
        </button>
        <button type="button" className="btn btn-primary" style={{backgroundColor: 'red'}} onClick={() => updateStatus('red')}>
          Set Status
        </button>
        <div></div>
        <div>View all statuses</div>
        {<AllStatuses />}
      </div>
   )
}

export default StatusContainer
