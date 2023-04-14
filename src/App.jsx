import "./styles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Featured from "./pages/Featured";
import Recommended from "./pages/Recommended";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="shop" element={<Shop />} />
          <Route path="featured" element={<Featured />} />
          <Route path="recommended" element={<Recommended />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
