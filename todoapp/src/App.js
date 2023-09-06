import { useState } from 'react';

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
  return <></>;
}

export default App;
