import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/navbar.css'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [count, setCount] = useState(() => {
        const c = JSON.parse(localStorage.getItem("cart")) || [];
        return c.reduce((s, item) => s + (item.quantity || 0), 0);
    });

    useEffect(() => {
        function update() {
            const c = JSON.parse(localStorage.getItem("cart")) || [];
            setCount(c.reduce((s, item) => s + (item.quantity || 0), 0));
        }

        // listen for cross-component updates
        window.addEventListener('cartUpdated', update);
        window.addEventListener('storage', update);
        return () => {
            window.removeEventListener('cartUpdated', update);
            window.removeEventListener('storage', update);
        };
    }, []);

    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container d-flex">
            <img id="logo-image" src={logo} alt="logo"/>
            <a className="navbar-brand d-flex flex-column align-items-center" href="#">
                AromaVerse
                <small className="text-muted" style={{fontSize:"0.8rem"}}>where every Blend tells a Story</small>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-underline ms-auto text-center">
                    <Link className="nav-link" id="home-nav" to="/">Home</Link>
                    <Link className="nav-link" to="/store">AV's Coffee Store</Link>
                    <Link className="nav-link" to="/contactUs">ContactUs</Link>
                    <Link className="nav-link" to="/login">Login / Register</Link>
                    <button type="button" className="btn btn-success cart-btn d-flex gap-2 justify-content-center">
                        <Link className="nav-link cart" style={{ color: "white" }} to="/cart">
                            Cart
                        </Link>
                        <span className="badge text-bg-danger cart-badge my-2" style={{fontSize: "16px", borderRadius: "50%"}}>
                            {count}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}
