import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import CheackOut from "./pages/CheackOut";
import ProductDetails from "./pages/ProductDeatils";
import { ToastContainer, Bounce } from "react-toastify";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheackOut />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
