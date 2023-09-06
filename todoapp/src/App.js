import { lazy, Suspense, useState } from 'react';
const Todos = lazy(() => import('./Todos'));

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
    <div className='App'>
      <h1 className='center blue-text'>Todo's</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos todos={todos} />
      </Suspense>
    </div>
  );
}

export default App;
