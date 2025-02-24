"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg border border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-green-400 drop-shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Contact Center AI
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-blac text-lg font-semibold hover:text-green-300 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón para menú móvil */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden bg-white bg-opacity-90 backdrop-blur-lg shadow-lg border border-gray-300 absolute w-full left-0 top-16 transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 scale-100 py-4"
            : "opacity-0 scale-95 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-gray-900 text-lg font-semibold hover:text-green-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
