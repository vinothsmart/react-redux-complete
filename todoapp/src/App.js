import { useState } from 'react';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Buy some milk',
    },
    {
      id: 2,
      content: 'Play mario kart',
    },
  ]);
  return (
    <>
      <Todos todos={todos} />
    </>
  );
}

export default App;
