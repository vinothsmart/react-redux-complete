import { memo } from 'react';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae impedit quia laudantium
        totam in magni? Et, sint itaque deserunt cupiditate porro ad. Commodi deleniti voluptatem
        quia doloribus atque labore consectetur.
      </p>
    </div>
  );
};

export default memo(About);
