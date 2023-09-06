import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 2000);
  }, [navigate]);

  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae impedit quia laudantium
        totam in magni? Et, sint itaque deserunt cupiditate porro ad. Commodi deleniti voluptatem
        quia doloribus atque labore consectetur.
      </p>
    </div>
  );
};

export default memo(Contact);
