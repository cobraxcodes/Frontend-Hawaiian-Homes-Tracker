import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <h2 className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">Hawaiian Homes Tracker</h2>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            >
              About Us
            </Typography>
          </li>
         
          <li>
            <Link to='/contribute'>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            >
              Contribute
            </Typography>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            >
              Contact Us
            </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2025 Hawaiian Homes Tracker
      </Typography>
    </footer>
  );
}