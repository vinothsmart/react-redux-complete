import { memo } from 'react';

const Todos = ({ todos }) => {
  return (
    <div className='todos collection'>
      {todos.length ? (
        todos.map(todo => {
          return (
            <div className='collection-item' key={todo.id}>
              <span>{todo.content}</span>
            </div>
          );
        })
      ) : (
        <p className='center'>You have no todo's left, yay!</p>
      )}
    </div>
  );
};

export default memo(Todos);
