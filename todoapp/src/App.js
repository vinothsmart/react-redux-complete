import { lazy, Suspense, useCallback, useState } from 'react';
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

  const handleDelete = useCallback(
    id => () => {
      setTodos(preValues => preValues.filter(todo => todo.id !== id));
    },
    [],
  );

  return (
    <div className='todo-app container'>
      <h1 className='center blue-text'>Todo's</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos todos={todos} deleteTodo={handleDelete} />
      </Suspense>
    </div>
  );
}

export default App;
