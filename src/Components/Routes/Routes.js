import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import CheckOut from "../CheckOut/CheckOut";
import Courses from "../Courses/Courses";
import DetailsCourse from "../Courses/DetailsCourse";
import ErrorPage from "../ErrorPage/ErrorPage";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch(
            " https://b610-learning-platform-server-side-md-pervez-hossain.vercel.app/courses"
          ),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            ` https://b610-learning-platform-server-side-md-pervez-hossain.vercel.app/courses/${params.id}`
          ),
        element: <DetailsCourse></DetailsCourse>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            ` https://b610-learning-platform-server-side-md-pervez-hossain.vercel.app/checkout/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
