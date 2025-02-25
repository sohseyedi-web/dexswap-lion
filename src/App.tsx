import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./features/Navbar";
import { useResponsiveStore } from "./store/useResponsive";
import { useEffect } from "react";
import Sidebar from "./features/Sidebar";

function App() {
  const { updateMedia } = useResponsiveStore();

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

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
