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
      <div className="min-h-screen py-10 text-white bg-black ">
        <div
          className="absolute top-0 left-0 z-0 w-full h-full mt-10 bg-cover"
          style={{
            backgroundImage: "url(gifa.gif)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container z-10 mx-auto">
          {/* Contenedor principal */}
          <div className="h-[89vh] flex flex-col justify-center relative">
            <Main />
          </div>

          <h1 className="my-6 mt-[10rem] text-3xl font-bold text-center">
            Estos son los eventos disponibles!👋
          </h1>
          <hr className="my-6 border-t-2 border-gray-600" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contractAddresses.map((c) => (
              <div
                className="p-4 transition-transform transform bg-black border cursor-pointer rounded-3xl hover:scale-105"
                key={c.name}
                onClick={() => router.push(`${c.link}`)}
              >
                <img
                  src="/image.png"
                  className="block w-24 h-24 mx-auto rounded-full"
                />{" "}
                {/* Ajusta w-24 y h-24 según el tamaño deseado */}
                <h3 className="mt-4 text-xl font-semibold text-center">{c.name}</h3>
                <p className="text-center text-gray-400">
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
