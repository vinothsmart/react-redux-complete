import { Suspense, lazy } from 'react';
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  return (
    <div className='todo-app container'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
    </div>
  );
}

export default App;
