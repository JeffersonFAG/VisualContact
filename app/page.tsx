"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 100);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientPosition}% 50%, #1e3a8a, #064e3b, #111827)`,
        transition: "background-position 0.1s linear",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 animate-pulse"></div>
      <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg w-full text-center backdrop-blur-lg bg-opacity-90 border border-gray-300">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 mb-4 drop-shadow-md">
          Contact Center AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Conectamos clientes y agentes en tiempo real con tecnología de última
          generación. Optimiza la atención y mejora la experiencia con nuestro
          Contact Center impulsado por IA.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/customers"
            className="py-3 px-6 rounded-lg text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Clientes
          </Link>
          <Link
            href="/agents"
            className="py-3 px-6 rounded-lg text-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-300 shadow-md"
          >
            Agentes
          </Link>
        </div>
      </div>
    </main>
  );
}
