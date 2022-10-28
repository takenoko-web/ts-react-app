import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoType } from './Types/TodoType';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { UserProfileType } from './Types/UserProfileType';

const user: UserProfileType = {
  name: 'test',
  hobbies: ['映画', '読書']
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickGetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data)
    })
  }
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color='red' fontSize='36px' ></Text>
      <button onClick={onClickGetchData}>データ取得</button>
      {
        todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}></Todo>
        ))
      }
    </div >
  );
}

export default App;
