import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import './App.scss';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Market from './pages/Marketplace/Market';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Aboutus from "./pages/Aboutus/Aboutus";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

// using createBrowserRouter() to set routing path

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/market",
        element: <Market />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/aboutus",
        element: <Aboutus />
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

// using RouterProvider to provide routing feature

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
