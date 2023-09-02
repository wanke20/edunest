import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.scss';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Market from './pages/Marketplace/Market';

// using createBrowserRouter() to set routing path

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: 'rooms',
    element: <Home />
  },
  {
    path: '/marketplace',
    element: <Market />
  }
])

// using RouterProvider to provide routing feature

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
