import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import contractAddresses from "../const/contractAddresses";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
import { useWallet } from "@solana/wallet-adapter-react";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export default function NFTDrop2() {
  const wallet = useWallet();
  const { program } = useProgram(contractAddresses[1].address, "nft-drop");
  const claim = useClaimNFT(program);
  return (
    <div className="flex justify-center min-h-screen py-10 text-white bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center collectionContainer">
          <h1 className="text-3xl font-bold">
            Silvestre Dangond - Tickets disponibles!
          </h1>
          <hr
            className="mx-auto mt-4 border-t-2 border-gray-600"
            style={{ width: "60%" }}
          />
          <img src="/silvestre.jpg" alt="NFT Image" className="mx-auto mt-4" />
          {wallet.connected ? (
            <button
              className="justify-center px-4 py-2 mt-10 font-semibold text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
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
            className="mx-auto mt-4 border-t-2 border-gray-600"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}
