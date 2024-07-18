import { Button, Divider, Input, Layout } from "antd";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-4 w-[70%] mx-auto bg-transparent mt-20">
    <div className="flex justify-between items-start w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">
          Travel<span className="text-blue-400">Trax</span>
        </h2>
        <p>
          Travel helps companies{" "}
          <span className="block">manage payments easily.</span>
        </p>
        <div className="flex items-center gap-3 text-2xl text-blue-400">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebookMessenger />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <FaDiscord />
        </div>
      </div>
      <div className="flex flex-col  gap-3">
        <h2 className="text-2xl font-bold">Company</h2>
        <div>
          <Link className="text-md ">Home</Link>
        </div>
        <div>
          <Link className="text-md ">Stays</Link>
        </div>
        <div>
          <Link className="text-md ">Flights</Link>
        </div>
        <div>
          <Link className="text-md ">Packages</Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Join Our Newsletter</h2>
        <div className="flex">
          <Input className="bg-blue-100" placeholder="Your email address" />
          <Button type="primary">Subscribe</Button>
        </div>
        <p>
          * Will send you weekly updates for your better{" "}
          <span className="block">tour packages.</span>{" "}
        </p>
      </div>
    </div>
    <Divider />
    <div className="container mx-auto text-center ">
      <p className="text-gray-600">© 2024 TravelTrax. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
