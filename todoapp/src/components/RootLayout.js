import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { memo } from 'react';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default memo(RootLayout);
