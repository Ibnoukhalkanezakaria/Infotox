import React, { useState, useEffect } from "react";
import { NavbarData } from "../../Data/data";
import Logo from "../../assets/Logo-company.svg";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useGetStarted } from "../../Context/GetStartedContext";
import InsideCart from "../Sections/InsideCart";

const Navbar = () => {
  const { navLinks } = NavbarData;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const { cartQuantity } = useGetStarted();

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
            <div
              className="relative cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <span className="primary-clr fw-600 text-lg flex gap-4 ">
                <FaShoppingCart /> Cart
              </span>
              <div className="absolute left-[15%] top-[40%] quantity w-5 text-[14px] h-5 rounded-full flex items-center justify-center bg-primary-clr">
                <span className="secondary-clr">{cartQuantity}</span>
              </div>
            </div>
            <div>
              <Link to="/pricing">
                <button className="hover:opacity-60 duration-300 secondary-clr bg-primary-clr py-5 px-5 text-lg fw-600 rounded-2xl sm:block hidden">
                  Get Started
                </button>
              </Link>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:hidden block bg-color3 p-4 rounded-xl"
            >
              <HiBars3 className="text-xl primary-clr" />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`bg-[#000000af]  duration-500 fixed top-0 w-full h-screen ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="overflow-hidden duration-500 bg-primary-clr absolute w-[500px] max-w-[100%] top-[50%] rounded-3xl left-[50%] translate-50">
          <div className="flex justify-between items-center p-6 ">
            <span className="secondary-clr text-3xl fw-600">Your Cart</span>
            <div onClick={() => setShow(!show)}>
              <AiOutlineClose className="text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="  border-t-[1px] border-b-[1px] border-[#8f8f8f79]">
            {cartQuantity > 0 ? (
              <div>
                <InsideCart />
              </div>
            ) : (
              <div className="h-[250px] flex justify-center items-center">
                <span>No items found.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
