import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import type { AppProps } from "next/app";
import { UmiProvider } from "../utils/UmiProvider";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import Head from "./Head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  let endpoint = "https://api.devnet.solana.com";
  return (
    <ThirdwebProvider network={"devnet"}>
      <UmiProvider endpoint={endpoint}>
        <WalletModalProvider>
          <Head />
          <Component {...pageProps} />
        </WalletModalProvider>
      </UmiProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
