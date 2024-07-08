import "./App.css";
import BusTicket from "./components/user/BusTicket";
import BusAndHotel from "./components/user/BusAndHotel";
import FlightAndHotel from "./components/user/FlightAndHotel";
import FlightTicket from "./components/user/FlightTicket";
import Hotel from "./pages/user/Hotel";

function App() {
  return (
    <>
      <h1>Project Setup</h1>
      <FlightAndHotel />
      <FlightTicket />
      <BusTicket />
      <BusAndHotel />
      <Hotel />
    </>
  );
}

export default App;
