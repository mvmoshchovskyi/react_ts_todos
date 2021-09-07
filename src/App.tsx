import {FC} from 'react';
import TodoList from './components/TodosList';
import UserList from "./components/UserList";

const App:FC = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList/>    
    </div>
  );
};

export default App;
