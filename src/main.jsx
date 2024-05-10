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
import Update from './Pages/Update.jsx';
import Details from './Pages/Details.jsx';
import SubmitForm from './Pages/SubmitForm.jsx';
import MySubmission from './Pages/MySubmission.jsx';

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
      },
      {
        path: '/update/:id',
        element: <Update></Update>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/submit-form/:id',
        element: <SubmitForm></SubmitForm>
      },
      {
        path: '/my-submission/',
        element: <MySubmission></MySubmission>
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