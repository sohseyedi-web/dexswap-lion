import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./features/Navbar";
import SupportIcon from "./ui/SupportIcon";
import { useResponsiveStore } from "./store/useResponsive";
import { useEffect } from "react";

function App() {
  const { updateMedia } = useResponsiveStore();

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SupportIcon />
    </BrowserRouter>
  );
}

export default App;
