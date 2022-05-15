import React from 'react'
import Feed from '../feed/Feed'
import { useParams } from 'react-router-dom'
const UserFeed = () => {

  const { user } = useParams();
  return (
    <Feed user={user} />
  )
}

export default UserFeed