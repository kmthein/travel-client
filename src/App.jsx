import "./App.css";
import BusAndHotelSearch from "./components/user/common/BusAndHotelSearch";
import FlightAndHotelSearch from "./components/user/common/FlightAndHotelSearch";
import BusTicketSearch from "./components/user/common/FlightTicketSearch";
import FlightTicketSearch from "./components/user/common/FlightTicketSearch";
import Hotel from "./pages/user/Hotel";
import FlightAndHotelSelectHotel from "./pages/user/FlightAndHotelSelectHotel";
import FlightAndHotelSelectRoom from "./pages/user/FlightAndHotelSelectRoom";
import FlightAndHotelSelectFlight from "./pages/user/FlightAndHotelSelectFlight";
import FlightAndHotelConfirmation from "./pages/user/FlightAndHotelConfirmation";

function App() {
  return (
    <>
      {/* <FlightAndHotelSelectHotelSearch />
      <FlightTicketSearch />
      <BusAndHotelSearch />
      <BusTicketSearch /> */}
      {/* <Hotel /> */}
      {/* <FlightAndHotelSelectHotel /> */}
      {/* <FlightAndHotelSelectRoom /> */}
      {/* <FlightAndHotelSelectFlight /> */}
      <FlightAndHotelConfirmation />
    </>
  );
}

export default App;
