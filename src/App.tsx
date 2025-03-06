import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./features/Navbar";
import { useResponsiveStore } from "./store/useResponsive";
import { useEffect } from "react";
import Sidebar from "./features/Sidebar";
import { useTokenStore } from "./store/useTokenStore";
import { getUsdtPrice } from "./service/tokenService";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
