import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import contractAddresses from "../const/contractAddresses";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
import { useWallet } from "@solana/wallet-adapter-react";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export default function NFTDrop() {
  const wallet = useWallet();
  const { program } = useProgram(contractAddresses[0].address, "nft-drop");
  const claim = useClaimNFT(program);
  return (
    <div className="bg-black min-h-screen text-white py-10 flex justify-center">
      <div className="container mx-auto">
        <div className="collectionContainer text-center flex flex-col items-center justify-center gap-8">
          <h1 className="text-3xl font-bold">
            Bad Bunny World Tour - Tickets disponibles!
          </h1>
          <hr
            className="border-t-2 border-gray-600 mt-4 mx-auto"
            style={{ width: "60%" }}
          />
          <img src="/image.png" alt="NFT Image" className="mt-4 mx-auto" />
          {wallet.connected ? (
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold mt-10 hover:bg-purple-700 justify-center transition"
              onClick={() =>
                claim.mutate(
                  { amount: 1 },
                  {
                    onError: (error) => {
                      console.error(error);
                      alert(
                        "Algo salió mal. Verifica la consola para más detalles."
                      );
                    },
                  }
                )
              }
            >
              {claim.isLoading
                ? "Comprando..."
                : claim.isSuccess
                ? "Transacción Exitosa!"
                : "Comprar Boleto!"}
            </button>
          ) : (
            <WalletMultiButton>Seleccionar Billetera</WalletMultiButton>
          )}
          <hr
            className="border-t-2 border-gray-600 mt-4 mx-auto"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}
