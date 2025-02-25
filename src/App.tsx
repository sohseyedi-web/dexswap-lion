import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./features/Navbar";
import SupportIcon from "./ui/SupportIcon";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SupportIcon/>
    </BrowserRouter>
  );
}

export default App;
