import React from 'react'

const UserInfo = ({data}) => {
  return (
    <div>
      <h3>Name : {data.name}</h3>
      <h3>Desc : {data.desc}</h3>
      <h3>canCode : {data.canCode}</h3>
    </div>
  )
}

export default UserInfo
