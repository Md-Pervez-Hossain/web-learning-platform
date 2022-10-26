import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import CheckOut from "./Components/CheckOut/CheckOut";
import Courses from "./Components/Courses/Courses";
import DetailsCourse from "./Components/Courses/DetailsCourse";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Faq from "./Components/Faq/Faq";

import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";

function App() {
  const router = createBrowserRouter([
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
          element: (
            <PrivateRoute>
              <DetailsCourse></DetailsCourse>
            </PrivateRoute>
          ),
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
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
