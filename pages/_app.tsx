import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import type { AppProps } from "next/app";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import Head from "./Head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider network={"devnet"}>
      <WalletModalProvider >
        <Head /> 
        <Component {...pageProps}/>
      </WalletModalProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
