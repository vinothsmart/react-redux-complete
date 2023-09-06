import { memo } from 'react';

const Todos = ({ todos }) => {
  return (
    <div className='todos colloection'>
      {todos.map(todo => {
        return (
          <div className='collection-item' key={todo.id}>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Todos);
