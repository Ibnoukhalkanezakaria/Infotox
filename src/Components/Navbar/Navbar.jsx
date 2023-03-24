import React, { useState } from "react";
import { NavbarData } from "../../Data/data";
import Logo from "../../assets/Logo-company.svg";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { navLinks } = NavbarData;
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative z-50">
      <nav className="bg-secondary-clr ">
        <div className="Wrapper flex justify-between items-center py-8">
          <div className="logo" aria-label="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <ul
              className={`duration-500 lg:flex lg:py-0 py-10 z-[-1] absolute lg:bg-transparent lg:h-auto bg-primary-clr left-0 lg:static w-full lg:w-auto ${
                open ? "top-[104px]" : "top-[-480px]"
              } h-[]`}
              role="list"
              aria-label="nav-links"
            >
              {navLinks.map((item, index) => {
                const { href, name } = item;
                return (
                  <div key={index}>
                    <Link to={href}>
                      <li className="hover:text-[var(--color3)] text-lg py-2 lg:text-[var(--color7)] text-[var(--secondary-clr)] fw-500 px-6">
                        {name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <button className="secondary-clr bg-primary-clr py-5 px-5 text-lg fw-600 rounded-2xl sm:block hidden">
                Get Started
              </button>
            </div>
            <div>
              <span className="primary-clr fw-600 text-lg flex gap-2">
                <FaShoppingCart /> Cart
              </span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="lg:hidden block bg-color3 p-4 rounded-xl"
            >
              <HiBars3 className="text-xl primary-clr" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
