import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/user/Homepage";
import Userlayout from "./layouts/Userlayout";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import DestinationPage from "./pages/admin/DestinationPage";
import HotelPage from "./pages/admin/HotelPage";
import AirlinePage from "./pages/admin/AirlinePage";
import BusServicePage from "./pages/admin/BusServicePage";
import useSearch from "./hooks/useSearch";

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
