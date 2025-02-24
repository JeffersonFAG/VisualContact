"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoResults(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return showNoResults ? (
    <div className="flex justify-center items-center w-full h-full py-10">
      <p className="ml-3 text-blue-500 font-semibold">Sin resultados</p>
    </div>
  ) : (
    <div className="flex justify-center items-center w-full h-full py-10">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      <p className="ml-3 text-blue-500 font-semibold">Cargando...</p>
    </div>
  );
};

export default Loading;
