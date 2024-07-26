import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Academics,
  Contact,
  Events,
  News,
  NotFound,
  Others,
} from "../landingPage/Index";
import { LandingPage, SignIn, Signup } from "../Pages/Index";

// import React from 'react'

function Router() {
  const routes = createBrowserRouter([
    //   landing page
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <NotFound />,
      children: [
        {
          path: "about",
          element: <About />,
          errorElement: <NotFound />,
        },
        {
          path: "academics",
          element: <Academics />,
          errorElement: <NotFound />,
        },
        {
          path: "contact",
          element: <Contact />,
          errorElement: <NotFound />,
        },
        {
          path: "news",
          element: <News />,
          errorElement: <NotFound />,
        },
        {
          path: "others",
          element: <Others />,
          errorElement: <NotFound />,
        },
        {
          path: "events",
          element: <Events />,
          errorElement: <NotFound />,
        },
      ],
    },

    {
      path: "/login",
      element: <SignIn />,
      errorElement: <NotFound />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default Router;
