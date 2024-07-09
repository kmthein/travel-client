import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
import Hotelpage from "./pages/user/Hotelpage";
import Destinationpage from "./pages/user/Destinationpage";
import TravelReceipt from "./pages/user/TravelReceipt";
import FlightAndHotelConfirmation from "./pages/user/FlightAndHotelConfirmation";

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
        {
          path: "/hotel",
          element: <Hotelpage />,
        },
        {
          path: "/destination",
          element: <Destinationpage />,
        },
        {
          path: "/confirm",
          element: <FlightAndHotelConfirmation />,
        },
        {
          path: "/receipt",
          element: <TravelReceipt />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
