import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Store from "./pages/Store"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Order from "./pages/Order"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter basename="/AromaVerse-React-Coffee-Webiste/">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/contactUs" element={<ContactUs />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/order" element={<Order />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
