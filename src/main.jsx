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
import PendingAssignment from './Pages/PendingAssignment.jsx';
import GiveMarks from './Pages/GiveMarks.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import { Toaster } from 'react-hot-toast';
import ShowDetails from './Components/ShowDetails.jsx';
import Profile from './Pages/Profile.jsx';


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
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>

      },
      {
        path: '/all-assignment',
        element: <AllAssignment></AllAssignment>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute> <Update></Update></PrivateRoute>

      },
      {
        path: '/user-profile',
        element: <PrivateRoute><Profile></Profile> </PrivateRoute>

      },
      {
        path: '/details/:id',
        element: <PrivateRoute> <Details></Details></PrivateRoute>
      },
      {
        path: '/submit-form/:id',
        element: <PrivateRoute> <SubmitForm></SubmitForm></PrivateRoute>
      },
      {
        path: '/my-submission',
        element: <PrivateRoute> <MySubmission></MySubmission></PrivateRoute>
      },
      {
        path: '/pending-assignment',
        element: <PrivateRoute> <PendingAssignment></PendingAssignment></PrivateRoute>
      },
      {
        path: '/give-marks/:id',
        element: <PrivateRoute> <GiveMarks></GiveMarks></PrivateRoute>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/details-submission/:id',
        element: <PrivateRoute> <ShowDetails></ShowDetails> </PrivateRoute>

      },
     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </FirebaseProvider>
  </>
)