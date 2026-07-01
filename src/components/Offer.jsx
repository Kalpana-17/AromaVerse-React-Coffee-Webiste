import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import '../styles/offer.css'

export const Offer = () => {
  return (
    <div className="alert alert-warning alert-dismissible offer-alert d-flex fade show mb-0" role="alert">
        <p>
            <strong style={{color: "red"}}>Offer alert!! </strong>You can claim upto 15% off on orders above ₹599 at our 
            <a href="store.html" className="alert-link">AV's Coffee Store</a> today. 
            Hurry Limited Period Offer.<br /> T&C Applied.
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
