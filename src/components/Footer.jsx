import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/footer.css'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className="d-flex footer-container">
            <div className="container footer1 px-4 py-2"> 
                <div className="container social-media">
                    <p>Connect and support us at</p>
                    <a href="#"><img src={"https://img.icons8.com/3d-fluency/94/instagram-logo.png"} alt="instagram-logo"/></a>
                    <a href="#"><img src={"https://img.icons8.com/3d-fluency/94/youtube-logo.png"} alt="youtube-logo"/></a>
                    <a href="#"><img src={"https://img.icons8.com/ios-filled/100/228BE6/linkedin.png"} alt="linkedin-logo"/></a>
                    <a href="#"><img src={"https://img.icons8.com/ios-filled/100/twitterx.png"} alt="twitterx-logo"/></a>
                </div>
            </div>
            <div className="container footer2 px-5 py-2">
                <h3>
                    Location: <i>Banjara Hills, Hyderabad, Telangana, India.</i>
                </h3>
                <p>Click below for the location...</p>
                <a href="#">Google Maps</a>
            </div>
        </div>
        
        <div className="d-flex justify-content-center copyrights">
            &copy;2025, Aroma Verse By Kalpana Kyama (For Education Purpose Only)
        </div>
    </footer> 
  )
}
