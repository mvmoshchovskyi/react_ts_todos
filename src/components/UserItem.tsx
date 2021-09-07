import React, { FC } from 'react'
import {IUser} from '../types/user'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <div style={{border:"2px solid gray", padding:"15px"}}>
      {user.name} live in 
    </div>
  )
}

export default UserItem
