import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offer } from "../components/Offer"
import { NavBar } from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const Cart = () => {

  const navigate = useNavigate();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cart]);

  function placeOrder() {
    // save rendered bill HTML so Order page can show exact invoice
    const billEl = document.getElementById('billSection');
    if (billEl) {
      localStorage.setItem('invoiceData', billEl.outerHTML);
    } else {
      // fallback: save structured data
      localStorage.setItem('invoiceData', JSON.stringify(cart));
    }
    localStorage.setItem('clearCart', 'true');
    navigate('/order');
  }

  function emptyCart() {
    setCart([]);
  }

  function increment(name) {
    setCart(cart.map(i => i.name === name ? { ...i, quantity: (i.quantity || 0) + 1 } : i));
  }

  function decrement(name) {
    setCart(cart.map(i => i.name === name ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 0) } : i).filter(i => i.quantity > 0));
  }

  return (
    <>
      <style>
        {`
          footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            padding: 2px;
          }
        `}
      </style>

      <Offer/>
      <NavBar />

      {/* -- Cart Content -- */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h4 className="p-3">
            Cart is empty! 😢<br/><br/>
            Go to our <Link style={{color: "blue"}} to="/store">Store</Link> to add items.
          </h4>
        </div>
      ) : (
        <div className="cart-container m-5">
          <div className="emptyBtn d-flex justify-content-end mb-1 mx-5">
            <button type="button" className="btn btn-danger" onClick={emptyCart}>
              Empty Cart 🗑
            </button>
          </div>

          <div className="cart-items list-group">
            {cart.map(item => (
              <div key={item.name} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="text-muted">₹{item.price} each</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-secondary" onClick={() => decrement(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm btn-secondary" onClick={() => increment(item.name)}>+</button>
                  <strong className="ms-3">₹{item.price * item.quantity}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* -- Bill -- */}
          <div className="bill-container mt-3" id="bill-container">
            <div className="d-flex flex-column rounded p-2" id="billSection">
              <h4 style={{color: "rgb(22, 164, 74, 1)"}}>Your Bill:</h4>
              <div className="bill">
                {(() => {
                  const GST = 0.12;
                  const DISCOUNT = 0.15;
                  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
                  const gstAmount = subtotal * GST;
                  const discountAmount = subtotal > 599 ? subtotal * DISCOUNT : 0;
                  const total = subtotal + gstAmount - discountAmount;
                  return (
                    <>
                      <div className="actual d-flex justify-content-between">
                        <p><strong>Original Bill of items purchased:</strong></p>
                        <span className="actual-amount">₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="gst d-flex justify-content-between">
                        <p><strong>GST(12%):</strong></p>
                        <span className="gst-amount">₹{gstAmount.toFixed(2)}</span>
                      </div>
                      <div className="discount d-flex justify-content-between">
                        <p><strong>Discount(15%):</strong></p>
                        <span className="discount-amount">{discountAmount > 0 ? `-₹${discountAmount.toFixed(2)}` : '₹0'}</span>
                      </div>
                      <div className="total d-flex justify-content-between">
                        <p><strong>Total Bill of items purchased:</strong></p>
                        <span className="total-amount">₹{total.toFixed(2)}</span>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
          </div>

          <div className="payBill mt-2 p-2" style={{display: "inline-block"}}>
            <button type="button" className="btn btn-success" onClick={placeOrder}>
              Proceed to pay
            </button>
          </div>
        </div>
      )}

      {/* -- Footer -- */}
      <footer>
        <div className="d-flex justify-content-center copyrights" style={{backgroundColor: "rgb(238, 217, 196)", border: "1.7px dashed rgb(119, 73, 73)"}}>
          &copy;2025, Aroma Verse By Kalpana Kyama (For Education Purpose Only)
        </div>
      </footer> 
    </>
  );
};

export default Cart;