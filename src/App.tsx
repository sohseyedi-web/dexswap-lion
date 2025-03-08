import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./features/Navbar";
import { useResponsiveStore } from "./store/useResponsive";
import { useEffect } from "react";
import Sidebar from "./features/Sidebar";
import { useTokenStore } from "./store/useTokenStore";
import { getUsdtPrice } from "./service/tokenService";
import Support from "./pages/Support";
import Tether from "./pages/Tether";
import TokensTable from './pages/Tokens';

function App() {
  const { updateMedia } = useResponsiveStore();
  const { addTomanPrice } = useTokenStore();

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

  const fetchTokenPrice = async () => {
    const toman = await getUsdtPrice();
    addTomanPrice(toman?.USDT?.price);
  };

  useEffect(() => {
    fetchTokenPrice();
    const interval = setInterval(fetchTokenPrice, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tether-price" element={<Tether />} />
        <Route path="/lists" element={<TokensTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
