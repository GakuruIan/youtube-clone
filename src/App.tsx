import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import PasswordRecovery from "./Auth/PasswordRecovery";
import Profile from "./Auth/Profile";

import Main from "./Pages/Main";
import Videos from "./Pages/Videos/Videos";
import Video from "./Pages/Video/Video";
import Channel from "./Pages/Channel/Channel";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Videos />,
      },

      {
        path: "/channel/@username",
        element: <Channel />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
  {
    path: "/watch/1",
    element: <Video />,
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <PasswordRecovery />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
