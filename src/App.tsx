import "./App.css";
import { Navbar } from "./components/navbar/navbar";

import { Route, Routes } from "react-router-dom";
import { Stock, Favourite, Cart } from "./components/zibil/zibil";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Stock />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
