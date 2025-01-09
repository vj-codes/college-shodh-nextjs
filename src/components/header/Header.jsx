"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For app directory
import React, { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Colleges", to: "/colleges" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const pathname = usePathname(); // Get the current path
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="shadow sticky z-50 top-0 transition-all">
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="Collegeshodh logo_page-0001.png"
                  className="mr-3 h-15 w-20"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>

          {/* Desktop navigation items */}
          <div className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.to}
                className={`${
                  pathname === item.to
                    ? "text-orange-500 font-bold underline"
                    : "text-gray-700"
                } hover:text-orange-500`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:order-2 flex-row">
            <Link
              href="https://entechonline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hidden md:block text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none">
                Explore Your Passion
              </button>
            </Link>
          </div>

          {/* Mobile menu with sliding effect */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 h-full w-64 bg-white transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-40`}
          >
            <button
              onClick={closeMenu}
              className="text-gray-600 p-4 focus:outline-none"
            >
              {/* Close button */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col mt-4 font-medium">
              {navItems.map((item, index) => (
                <li key={index} className="ml-8">
                  <Link
                    href={item.to}
                    onClick={closeMenu}
                    className={`${
                      pathname === item.to
                        ? "text-orange-500 font-bold underline"
                        : "text-gray-700"
                    } hover:text-orange-500`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="block md:hidden mt-4 ml-8">
                <Link
                  href="https://entechonline.com/"
                  onClick={closeMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
                    Explore Your Passion
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger icon for mobile */}
          <button className="block md:hidden m-4" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
