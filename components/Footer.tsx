import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 text-white bg-black">
      <hr className="my-6 border-t-2 border-gray-600" />

      <div className="flex items-center justify-center">
        <img src="/a.png" className="mr-4 max-h-20" alt="Solana" />{" "}
        {/* Añade margen a la derecha */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mb-4 text-xl font-bold">Enlaces rápidos</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Menú
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Reservas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="mb-4 text-xl font-bold">Horario de apertura</h2>
          <p>Lunes - Viernes: 11:00 AM - 10:00 PM</p>
          <p>Sábado - Domingo: 12:00 PM - 11:00 PM</p>
        </div>
        <div className="col-span-1">
          <h2 className="mb-4 text-xl font-bold">Contacto</h2>
          <p>Dirección: 123 Calle Principal</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@spagio.com</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {" "}
        {/* Añade margen superior */}
        Spagio - Copyright © 2023 derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
