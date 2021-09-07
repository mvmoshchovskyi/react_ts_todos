import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import UserItem from '../components/UserItem'

const UserList: React.FC = () => {
  const { users, error, isLoading } = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()


  useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <UserItem key={user.id} user={user}/>
      )}
    </div>
  );
};

export default UserList;