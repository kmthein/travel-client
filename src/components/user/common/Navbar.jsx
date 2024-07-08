import React from "react";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../features/ui/UiSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between p-4">
          <div className="text-3xl font-bold ">
            Travel<span className="text-blue-600">Trax</span>
          </div>
          <nav>
            <ul className="flex space-x-10 items-center text-xl">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Stay</Link>
              </li>
              <li>
                <Link>Flights</Link>
              </li>
              <li>
                <Link>Flight + Hotel</Link>
              </li>
              <li>
                <Link>Packages</Link>
              </li>
              <li className="cursor-pointer">
                <IoMdPerson onClick={() => dispatch(openModal())} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
