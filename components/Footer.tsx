import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 text-white bg-black">
      <hr className="my-6 border-t-2 border-gray-600" />

      <div className="flex items-center justify-center">
        <img src="/a.png" className="mr-4 max-h-20" alt="Solana" />{" "}
        {/* Añade margen a la derecha */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      <div className="flex items-center justify-center mt-4">
        {" "}
        {/* Añade margen superior */}
         © 2023
      </div>
    </footer>
  );
}

export default Footer;
