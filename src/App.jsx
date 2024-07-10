import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
<<<<<<< HEAD
import Destinationpage from "./pages/user/Destinationpage";
=======
import TravelReceipt from "./pages/user/TravelReceipt";
>>>>>>> cc62c14c02bbfa9fbd0c031cf3e09ea5626db488
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import AirlinePage from "./pages/admin/AirlinePage";
import BusServicePage from "./pages/admin/BusServicePage";
import Hotelpage from "./pages/user/Hotelpage";
import Destinationpage from "./pages/user/Destinationpage";
<<<<<<< HEAD
=======
import FlightAndHotelConfirmation from "./pages/user/FlightAndHotelConfirmation";
import FlightAndHotelSelectFlight from "./pages/user/FlightAndHotelSelectFlight";
import FlightAndHotelSelectHotel from "./pages/user/FlightAndHotelSelectHotel";
import FlightAndHotelSelectRoom from "./pages/user/FlightAndHotelSelectRoom";
import DestinationDetailpage from "./pages/user/DestinationDetailpage";
import Aboutpage from "./pages/user/Aboutpage";
>>>>>>> cc62c14c02bbfa9fbd0c031cf3e09ea5626db488
import FlightClassPage from "./pages/admin/FlightClassPage";
import BusClassPage from "./pages/admin/BusClassPage";
import FlightSchedulePage from "./pages/admin/FlightSchedulePage";
import BusSchedulePage from "./pages/admin/BusSchedulePage";
<<<<<<< HEAD
import DestinationDetailpage from "./pages/user/DestinationDetailpage";
=======
>>>>>>> cc62c14c02bbfa9fbd0c031cf3e09ea5626db488

function App() {
  const {
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    handleSearch,
    handleReset,
    getColumnSearchProps,
  } = useSearch();

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
          element: <AirlinePage getColumnSearchProps={getColumnSearchProps} />,
        },
        {
          path: "airline/class",
          element: (
            <FlightClassPage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
        {
          path: "airline/schedule",
          element: (
            <FlightSchedulePage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
        {
          path: "bus",
          element: (
            <BusServicePage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
        {
          path: "bus/class",
          element: <BusClassPage getColumnSearchProps={getColumnSearchProps} />,
        },
        {
          path: "bus/schedule",
          element: (
            <BusSchedulePage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
