import type { NextPage } from "next";
import { useRouter } from "next/router";
import contractAddresses from "../const/contractAddresses";
import Head from "./Head";
import Main from "../components/Main";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className=" bg-black min-h-screen text-white py-10 ">
        <div
          className="h-full w-full absolute top-0 left-0 z-0 mt-10 bg-cover"
          style={{
            backgroundImage: "url(gifa.gif)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto z-10">
          {/* Contenedor principal */}
          <div className="h-[89vh] flex flex-col justify-center relative">
            <Main />
          </div>

          <h1 className="text-3xl font-bold text-center my-6">
            Estos son los eventos disponibles!👋
          </h1>
          <hr className="border-t-2 border-gray-600 my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {contractAddresses.map((c) => (
              <div
                className="bg-black border rounded-3xl p-4 cursor-pointer transition-transform transform hover:scale-105"
                key={c.name}
                onClick={() => router.push(`${c.link}`)}
              >
                <img
                  src="/image.png"
                  className="mx-auto block rounded-full w-24 h-24"
                />{" "}
                {/* Ajusta w-24 y h-24 según el tamaño deseado */}
                <h3 className="text-xl font-semibold text-center mt-4">{c.name}</h3>
                <p className="text-gray-400 text-center">
                  Comprar boleto por 1 solana.
                </p>
              </div>
            ))}
          </div>
              <Contact/>
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Home;
