import React from 'react';
import StatusContainer from './status-container'
import UserAuth from './users/user-auth'
 
function UserContainer () {
 
   return (
    <div>
      <UserAuth />
      <StatusContainer />
    </div>
   )
}

export default UserContainer