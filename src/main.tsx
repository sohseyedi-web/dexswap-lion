import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum],
  connectors: [
    metaMask(),
    injected({
      shimDisconnect: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
