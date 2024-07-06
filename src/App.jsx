import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout />,
      children: [
        {
          index: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
