import React, { useState } from "react";
import { NavbarData } from "../../Data/data";
import Logo from "../../assets/Logo-company.svg";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { navLinks } = NavbarData;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
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
                open ? "top-[104px]" : "top-[-490px]"
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
          <div className="flex md:gap-8 gap-2 items-center">
            <div>
              <span
                onClick={() => setShow(!show)}
                className="primary-clr fw-600 text-lg flex gap-2 cursor-pointer"
              >
                <FaShoppingCart /> Cart
              </span>
            </div>
            <div>
              <button className="secondary-clr bg-primary-clr py-5 px-5 text-lg fw-600 rounded-2xl sm:block hidden">
                Get Started
              </button>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:hidden block bg-color3 p-4 rounded-xl"
            >
              <HiBars3 className="text-xl primary-clr" />
            </div>
          </div>
          <div
            className={`translate-50 z-[999] duration-500 ${
              show ? "block" : "hidden"
            } absolute  bg-primary-clr w-[350px]  max-w-[100%] rounded-2xl`}
          >
            <div className="flex p-4 justify-between items-center">
              <span className="secondary-clr fw-600">Your Cart</span>
              <span
                className="secondary-clr fw-600 cursor-pointer"
                onClick={() => setShow(false)}
              >
                <AiOutlineClose />
              </span>
            </div>
            <hr />
            <div className="min-h-[220px] flex justify-center items-center">
              <div className="">
                <span>No items found.</span>
              </div>
            </div>
          </div>
          <div
            className={`duration-500 ${
              show ? "block" : "hidden"
            } z-[50] bg-[#06070A] opacity-50 fixed left-0 w-full top-0 min-h-[100vh] right-0 bottom-0`}
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
