function Heading() {
  return (
    <div name="heading" className="flex justify-between p-10 ">
      <div className="text-2xl font-bold ">
        Travel<span className="text-blue-600">Trax</span>
      </div>
      <nav>
        <ul
          className="flex font-mono text-lg justify-between font-bold "
          style={{ width: "700px", listStyle: "none" }}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Stays</a>
          </li>
          <li>
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Flight + Hotel</a>
          </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Heading;
