import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import UploadPost from "./components/UploadPost";
import LocationProvider from "./components/Location";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

export default function App() {
  //states for username and name
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    console.log(username);
  }, [username]);

  // if user is present then only then we will allow the home page to be visited
  const router = createBrowserRouter([
    {
      path: "/",
      element: username ? <Home /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/login",
      element: (
        <Login
          _name={name}
          _username={username}
          _setName={setName}
          _setUsername={setUsername}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <Register
          _name={name}
          _username={username}
          _setName={setName}
          _setUsername={setUsername}
        />
      ),
    },
    {
      path: "/postUpload",
      element: (
        <UploadPost
        />
      ),
    },
  ]);



  return <LocationProvider><RouterProvider router={router} /></LocationProvider>;
}
