import React from "react";

function Contact() {
  return (
    <>
      <hr className="my-6 border-t-2 border-gray-600" />
      <h1 id="contacto" className="my-6 text-3xl font-bold text-center">
        Formulario de Contacto 👨‍💼
      </h1>
      <form className="w-full max-w-xl mx-auto bg-black rounded-xl">
        <div className="p-4">
          <input name="_redirect" type="hidden" value="#" />
          <div className="mt-4 space-y-6">
            <div>
              <label
                className="block mb-3 text-sm font-medium text-white"
                
              >
                Nombre
              </label>
              <input
                className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Nombre"
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-white"
                
              >
                Nombre de la Empresa
              </label>
              <input
                className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Nombre de la Empresa"
              />
            </div>
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-white"
                
              >
                Email
              </label>
              <input
                className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="email@spagio.com"
                autoComplete="off"
                type="email"
              />
            </div>
            <div>
              <div>
                <label
                  className="block mb-3 text-sm font-medium text-white"
                  
                >
                  Detalles del Evento
                </label>
                <div className="mt-1">
                  <textarea
                    className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Descripcion"
                    
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <button
                className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                style={{
                  background: "linear-gradient(90deg, purple, blue)", // Gradiente de color entre púrpura y azul
                }}
                type="submit"
              >
                Enviar ✉️
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
