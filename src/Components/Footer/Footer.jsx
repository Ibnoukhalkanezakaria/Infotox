import React from "react";
import Logo from "../../assets/Logo-company2.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { Link } from "react-router-dom";

import { NavbarData } from "../../Data/data";

const Footer = () => {
  const { navLinks } = NavbarData;
  const showDate = new Date();
  const today = showDate.getFullYear();
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <div className="flex gap-16 flex-wrap flex-row">
          <div className="w-[800px]">
            <img src={Logo} alt="logo" />
            <p className="max-w-[500px] color8 py-6 leading-7 fw-500">
              Infotox is one of the most reliable delievery patlform magement
              service to automate your network.
            </p>
            <PrimaryButton className="mt-6">Get Started</PrimaryButton>
            <div className="flex pt-10 gap-4">
              <AiFillLinkedin className="text-2xl secondary-clr" />
              <AiOutlineTwitter className="text-2xl secondary-clr" />
              <AiFillInstagram className="text-2xl secondary-clr" />
            </div>
          </div>
          <div className="w-auto">
            <h4 className="secondary-clr text-xl fw-500">Pages main</h4>
            <ul className="pt-8" role="list" aria-label="nav-links">
              {navLinks.map((item, index) => {
                const { href, name } = item;
                return (
                  <div key={index}>
                    <Link to={href}>
                      <li className="pb-6 color8 text-lg duration-500 hover:text-[var(--color3)] fw-500">
                        {name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="sm:pt-20 pt-10 max-w-[900px] leading-7">
          © Ibnoukhalkane {today} Infotox. Design by Flowset, checkout the
          repository{" "}
          <a
            href="https://github.com/Ibnoukhalkanezakaria/Infotox"
            target="_blank"
            className="color4"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
