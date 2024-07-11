import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
import TravelReceipt from "./pages/user/TravelReceipt";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import AirlinePage from "./pages/admin/AirlinePage";
import BusServicePage from "./pages/admin/BusServicePage";
import Hotelpage from "./pages/user/Hotelpage";
import Destinationpage from "./pages/user/Destinationpage";
import FlightAndHotelConfirmation from "./pages/user/FlightAndHotelConfirmation";
import FlightAndHotelSelectFlight from "./pages/user/FlightAndHotelSelectFlight";
import FlightAndHotelSelectHotel from "./pages/user/FlightAndHotelSelectHotel";
import DestinationDetailpage from "./pages/user/DestinationDetailpage";
import Aboutpage from "./pages/user/Aboutpage";
import FlightClassPage from "./pages/admin/FlightClassPage";
import BusClassPage from "./pages/admin/BusClassPage";
import FlightSchedulePage from "./pages/admin/FlightSchedulePage";
import BusSchedulePage from "./pages/admin/BusSchedulePage";
import Flightpage from "./pages/user/Flightpage";
import Buspage from "./pages/user/Buspage";
import FlightAndHotelSelectRoom from "./pages/user/FlightAndHotelSelectRoom";
import useSearch from "./hooks/useSearch";
import DestinationPage from "./pages/admin/DestinationPage";
import HotelPage from "./pages/admin/HotelPage";
import BusAndHotelSelectBus from "./pages/user/BusAndHotelSelectBus";
import BusAndHotelSelectHotel from "./pages/user/BusAndHotelSelectHotel";
import BusAndHotelSelectRoom from "./pages/user/BusAndHotelSelectRoom";
import BusAndHotelConfirmation from "./pages/user/BusAndHotelConfirmation";

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
        {
          path: "/flights",
          element: <Flightpage />,
        },
        {
          path: "/buses",
          element: <Buspage />,
        },
        {
          path: "/flightandhotel",
          element: <FlightAndHotelSelectHotel />,
        },
        {
          path: "/flightandroom",
          element: <FlightAndHotelSelectRoom />,
        },
        {
          path: "/flight",
          element: <FlightAndHotelSelectFlight />,
        },
        {
          path: "/flightconfirmation",
          element: <FlightAndHotelConfirmation />,
        },
        {
          path: "/travelreceipt",
          element: <TravelReceipt />,
        },
        {
          path: "/busandhotel",
          element: <BusAndHotelSelectHotel />,
        },
        {
          path: "/busandroom",
          element: <BusAndHotelSelectRoom />,
        },
        {
          path: "/bus",
          element: <BusAndHotelSelectBus />,
        },
        {
          path: "/busconfirmation",
          element: <BusAndHotelConfirmation />,
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
