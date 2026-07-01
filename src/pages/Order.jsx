import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// html2pdf is installed via npm; window.html2pdf may be available when bundled

const Order = () => {

  const [invoiceItems, setInvoiceItems] =
    useState([]);

  useEffect(() => {

    const savedData = localStorage.getItem("invoiceData");

    if (!savedData) return;

    // If invoiceData is HTML string (starts with '<'), render it into container
    if (savedData.trim().startsWith('<')) {
      const container = document.getElementById('billContainer');
      if (container) container.innerHTML = savedData;
      setInvoiceItems([]);
    } else {
      try {
        const parsed = JSON.parse(savedData);
        setInvoiceItems(parsed || []);
      } catch (e) {
        setInvoiceItems([]);
      }
    }

    // Setup download button handler if present
    const downloadBtn = document.getElementById('downloadInvoice');
    function handleDownload() {
      const billElement = document.getElementById('billSection') || document.getElementById('billContainer');
      if (billElement && window.html2pdf) {
        const opt = {
          margin: 0.5,
          filename: 'AV_Order_Invoice.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        window.html2pdf().set(opt).from(billElement).save().then(() => {
          setTimeout(() => alert('Download successful! ☕ Happy Caffiening...'), 1000);
        });
      }
    }
    if (downloadBtn) downloadBtn.addEventListener('click', handleDownload);

    // clear cart if flagged
    if (localStorage.getItem('clearCart') === 'true') {
      localStorage.removeItem('cart');
      localStorage.removeItem('clearCart');
      window.dispatchEvent(new Event('cartUpdated'));
    }

    return () => {
      if (downloadBtn) downloadBtn.removeEventListener('click', handleDownload);
    };

  }, []);

  // Calculation of bill
  const GST = 0.12;
  const DISCOUNT = 0.15;

  const subtotal = invoiceItems.reduce(
    (sum,item) => sum + item.prodPrice * item.quantity,0
  );

  const gstAmount = subtotal * GST;

  const discountAmount = subtotal > 599 ? subtotal * DISCOUNT : 0;

  const total = subtotal + gstAmount - discountAmount;

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center bg-light">
        <h3>Order Successful!🤩</h3>
        <div className="container d-flex flex-column align-items-center">
          <h5>
            Will get you notified once we are ready with the order and assign it a delivery partner immediately..
          </h5>
          <p>
            Until then look at our website and share your thoughts with us at our
            <Link to="/contactUs">Contact Us</Link> page.
          </p>
        </div>

        {/* -- Bill Preview -- */}
        <div id="billContainer">
          <h3>Order Invoice - AromaVerse</h3>
          <h5>where every Blend tells a Story</h5>
        </div>
        <div className="text-center my-3 orderBill">
          <button className="btn btn-success" id="downloadInvoice">Download Invoice</button>
        </div>
      </div>
    </>
  );
};

export default Order;