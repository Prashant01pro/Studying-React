import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex text-white py-4 px-14 justify-between items-center bg-cyan-600">
      <h1 className="text-white font-bold text-3xl">Schlorers</h1>
      <div className="flex gap-8">
        {/* <a
          href="/"
          className="cursor-pointer hover:border-b-4 text-2xl border-b-black "
        >
          Home
        </a>
        <a
          href="/about"
          className="cursor-pointer hover:border-b-4 text-2xl  border-b-black "
        >
          About
        </a>
        <a
          href="/contact"
          className="cursor-pointer hover:border-b-4 text-2xl border-b-black "
        >
          Contact
        </a> */}

        <Link
          className="cursor-pointer hover:border-b-4 text-2xl font-bold border-b-black "
          to="/"
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:border-b-4 text-2xl font-bold border-b-black"
          to="/about"
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:border-b-4 text-2xl font-bold border-b-black "
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
