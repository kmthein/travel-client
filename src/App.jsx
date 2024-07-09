import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
import Destinationpage from "./pages/user/Destinationpage";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import AirlinePage from "./pages/admin/AirlinePage";
import BusServicePage from "./pages/admin/BusServicePage";
import Hotelpage from "./pages/user/Hotelpage";
import Destinationpage from "./pages/user/Destinationpage";
import FlightClassPage from "./pages/admin/FlightClassPage";
import BusClassPage from "./pages/admin/BusClassPage";
import FlightSchedulePage from "./pages/admin/FlightSchedulePage";
import BusSchedulePage from "./pages/admin/BusSchedulePage";
import DestinationDetailpage from "./pages/user/DestinationDetailpage";

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
          path: "/hotels",
          element: <Hotelpage />,
        },
        {
          path: "/destination",
          element: <Destinationpage />,
        },
        {
          path: "/destination/:id",
          element: <DestinationDetailpage />,
        },
        {
          path: "/about",
          element: <Aboutpage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "destination",
          element: (
            <DestinationPage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
        {
          path: "hotel",
          element: <HotelPage getColumnSearchProps={getColumnSearchProps} />,
        },
        {
          path: "airline",
          element: <AirlinePage />,
        },
        {
          path: "bus",
          element: <BusServicePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
