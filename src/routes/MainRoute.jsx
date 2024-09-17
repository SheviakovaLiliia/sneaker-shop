import { Routes, Route } from "react-router-dom";
import { Home, CartPage, Contacts } from "../pages";

export const MainRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);
