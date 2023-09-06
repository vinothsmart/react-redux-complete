import { memo, useCallback, useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState('');
  const handleChange = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      addTodo(content);
      setContent('');
    },
    [addTodo, content],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type='text' onChange={handleChange} value={content} />
      </form>
    </div>
  );
};

export default memo(AddTodo);
