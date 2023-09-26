import React from "react";
import Link from "next/link";

export default function Head() {
  return (
    <>
      <nav className="flex h-16 items-center px-4 fixed z-[100] w-screen">
        <Link href="/">
        <img src="/a.png" className="max-h-20" alt="Solana" /></Link>

        <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
          {/* <a
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="/examples/dashboard"
          >
            Nosotros
          </a> */}
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="/#preguntas-frecuentes"
          >
            Preguntas Frecuentes
          </Link>
          {/* <a
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="/examples/dashboard"
          >
            Roadmap
          </a> */}
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="/#contacto"
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center ml-auto mr-5 space-x-4">
          <img src="/sol.png" className="w-6 h-6 mr-2" alt="Solana" />
        </div>
      </nav>
    </>
  );
}
