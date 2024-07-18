import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
import TravelReceipt from "./pages/user/TravelReceipt";
import DashboardPage from "./pages/admin/DashboardPage";
import AirlinePage from "./pages/admin/AirlinePage";
import BusServicePage from "./pages/admin/BusServicePage";
import Hotelpage from "./pages/user/Hotelpage";
import Destinationpage from "./pages/user/Destinationpage";
import DestinationDetailpage from "./pages/user/DestinationDetailpage";
import Aboutpage from "./pages/user/Aboutpage";
import FlightClassPage from "./pages/admin/FlightClassPage";
import BusClassPage from "./pages/admin/BusClassPage";
import FlightSchedulePage from "./pages/admin/FlightSchedulePage";
import BusSchedulePage from "./pages/admin/BusSchedulePage";
import Flightpage from "./pages/user/Flightpage";
import Buspage from "./pages/user/Buspage";
import useSearch from "./hooks/useSearch";
import DestinationPage from "./pages/admin/DestinationPage";
import HotelPage from "./pages/admin/HotelPage";
import MemberPage from "./pages/admin/MemberPage";
import "react-toastify/dist/ReactToastify.css";
import RoomPage from "./pages/user/RoomPage";
import AdminRoomPage from "./pages/admin/RoomPage";
import ConfirmationPage from "./pages/user/ConfirmationPage";
import AdminProvider from "./providers/AdminProvider";
import ConfirmProvider from "./providers/ConfirmProvider";
import SelectFlightClass from "./components/user/flight/SelectFlightClass";
import SelectBusClass from "./components/user/bus/SelectBusClass";
import UserProfilePage from "./pages/user/UserProfilePage";
import TravelListPage from "./pages/admin/TravelListPage";

function App() {
  const {
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    handleSearch,
    handleReset,
    getColumnSearchProps,
    selectedPlan,
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
          path: "/rooms",
          element: <RoomPage />,
        },
        {
          path: "/confirmation",
          element: (
            <ConfirmProvider>
              <ConfirmationPage />
            </ConfirmProvider>
          ),
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
          path: "/flights/:id/class",
          element: <SelectFlightClass />,
        },
        {
          path: "/buses",
          element: <Buspage />,
        },
        {
          path: "/buses/:id/class",
          element: <SelectBusClass />,
        },
        {
          path: "/travelreceipt",
          element: <TravelReceipt />,
        },
        {
          path: "/user-profile",
          element: <UserProfilePage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminProvider />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "travel-list",
          element: (
            <TravelListPage getColumnSearchProps={getColumnSearchProps} />
          ),
        },
        {
          path: "member",
          element: <MemberPage getColumnSearchProps={getColumnSearchProps} />,
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
          path: "room/:id",
          element: (
            <AdminRoomPage getColumnSearchProps={getColumnSearchProps} />
          ),
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
