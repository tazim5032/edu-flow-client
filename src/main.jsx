import ReactDOM from 'react-dom/client'
import ErrorPage from './ErrorPage.jsx';
import './index.css'
import Root from './Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import CreateAssignment from './Pages/CreateAssignment.jsx';
import AllAssignment from './Pages/AllAssignment.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/create-assignment',
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: '/all-assignment',
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch('http://localhost:5000/assignment')
      },
     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </>
)