import { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Loading from './components/Loading';
const RootLayout = lazy(() => import('./components/RootLayout'));
const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const NoMatch = lazy(() => import('./components/NoMatch'));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <Suspense fallback={<Loading />}>
            <RootLayout />
          </Suspense>
        }
      >
        <Route index element={<Home />}></Route>
        <Route
          path='/about'
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        ></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route
          path='*'
          element={
            <Suspense fallback={<Loading />}>
              <NoMatch />
            </Suspense>
          }
        />
      </Route>,
    ),
  );
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
