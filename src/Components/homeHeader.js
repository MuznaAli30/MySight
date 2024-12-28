import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const navigateToChatPage = (e) => {
    e.preventDefault();
    console.log("chatPage");
    navigate("/chatPage");
  };

  return (
    <>
      <div className="flex flex-row justify-around items-center p-4 bg-transparent max-lg:hidden">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
            <div className="font-caveat font-semibold text-3xl">MY</div>
            <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>
        <div className="flex items-center justify-center flex-row space-x-7 font-mono text-xl">
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin"
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="home-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="fetures-part"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin"
          >
            FEATURES
          </ScrollLink>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin"
          >
            CONTACT
          </ScrollLink>
          <Link
            onClick={navigateToChatPage}
            className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin"
          >
            CHAT PAGE
          </Link>
        </div>
      </div>

      {/* Small page header */}
      <div className="max-lg:visible lg:hidden flex flex-row justify-between items-center m-auto p-4">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
            <div className="font-caveat font-semibold text-3xl">MY</div>
            <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>

        <div className="group relative">
          {/* Options Button */}
          <Link
            onClick={toggleDropdown}
            className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 text-black font-serif rounded-lg hover:scale-x-125 duration-300 text-xl"
          >
            Options
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-1 mr-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ScrollLink
              to="home-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer"
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to="home-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="fetures-part"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer"
            >
              FEATURES
            </ScrollLink>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={700}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer"
            >
              CONTACT
            </ScrollLink>
            <Link
              to={"/chatPage"}
              className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer"
            >
              CHAT PAGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
