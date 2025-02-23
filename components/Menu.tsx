"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/utils/constants";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <nav
        className={`bg-gray-900 text-white w-64 min-h-screen fixed md:static transition-transform duration-300 ease-in-out z-10 shadow-lg p-5 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Contact Center</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-4">
              <Link
                href={item.href}
                className="block p-3 rounded-lg hover:bg-gray-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
