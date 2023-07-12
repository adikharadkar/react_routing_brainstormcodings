
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {path: '/', element: <MainPage />, children: [
    {path: '/', element: <HomePage />},
  {path: '/user', element: <UserPage/>}
  ]},

  {path: '/admin', element: <dummy></dummy>, children: [
    {path: '/change-password'}
  ]}
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
