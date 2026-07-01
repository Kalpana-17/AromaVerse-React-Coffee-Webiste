import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Offer } from "../components/Offer";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <style>
        {`
          /* Large screens - prevent x-axis overflow */
          body, html {
            max-width: 100vw;
            overflow-x: hidden;
          }

          .container, .row {
            overflow-x: auto; /* scroll only if necessary */
          }

          /* Images and iframes scale */
          img, iframe {
            max-width: 100%;
          }

          @media (max-width: 768px) {
            .row.align-items-center {
              flex-direction: column !important;
              text-align: center;
            }

            .row.align-items-center .col-5, .row.align-items-center .col {
              width: 100% !important;
              max-width: 100% !important;
              margin: 10px 0 !important;
            }

            .row.align-items-center img {
              width: 90% !important;
              height: auto;
              margin: 0 auto;
            }

            iframe {
              width: 100% !important;
              height: 250px !important;
            }
          }
        `}
      </style>

      <Offer />
      <NavBar />

      <div className="container">
        <div className="row d-flex justify-content-evenly align-items-center">
            <div className="col-5 my-5">
                <h3 className="mb-3 text-center">CONTACT US <br/>- Stay in Touch</h3>
                <p className="p-4" style={{backgroundColor: "rgba(240, 248, 255, 0.283)"}}>
                    💬 We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, our team is always here to help. 
                    Reach out to us through our contact form, email, or social channels — and we'll get back to you as soon as possible. 
                    Stay connected with us for the latest updates, offers, and little coffee-croissant joys straight to your inbox. 
                    Your trust matters to us, and your information is always safe, used only to serve you better.
                </p>
            </div>
            <div className="col-5">
                <img src={"https://unocasa.com/cdn/shop/articles/types_of_coffee_91a828a5-7ff3-427d-acaa-c8b7289c9e5a_600x.jpg?v=1621261041"} 
                    className="d-block m-3 w-60" alt="coffees"/>
            </div>
        </div>
      </div>

    <div className="container">
        <div className="row d-flex justify-content-evenly align-items-center mb-3">
            <div className="col">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26370.801815579005!2d78.41518731824435!3d17.415974641043626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728e7c230a5%3A0xbf59752f5f7caa0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1757960206174!5m2!1sen!2sin" 
                    width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        
            <div className="col">
                <h3 className="mx-4 mb-3 text-center">CONTACT US <br/>- Send Us a Message</h3>
                <div className="container p-3" style={{backgroundColor: "rgba(240, 248, 255, 0.283)"}}>
                    <p className="mb-3 px-2">
                        📩 Have a question or feedback? Write to us at <a href="mailto:aromaverseBHills@gmail.com">aromaverseBHills@gmail.com</a> — 
                        we'd love to hear from you! Or use the contact form <a href="#contact-form">below</a>.
                        <br/>Staying in touch helps us serve you better, 
                        and rest assured, your information is safe with us.
                    </p>
                    <p className="px-2" style={{color: "rgb(63, 86, 100)"}}>
                        <i>Open Hours:</i><br/>
                        MONDAY - SATURDAY : 8AM TO 10PM <br/>
                        SUNDAY: 10AM TO 11PM 
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container" id="contact-form">
        <h3>Contact form☎️</h3>
        <p className="p-1" style={{display:"inline", backgroundColor: "rgba(255, 255, 255, 0.274)", borderRadius: "5px"}}>We not only tell our stories but listen to yours too...</p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
            <div className="my-3">
                <label htmlFor="username" className="form-label">Enter your name</label>
                <input type="text" className="form-control" id="username" placeholder="example@example.com or +91 XXXXXXXXXX"/>
            </div>
            
            <div className="my-3">
                <label htmlFor="user" className="form-label">Enter your phone number or email address</label>
                <input type="text" className="form-control" id="user" placeholder="example@example.com or +91 XXXXXXXXXX"/>
            </div>

            <div className="mb-2">
                <label htmlFor="query-box" className="form-label">Query</label>
                <textarea className="form-control" placeholder="Leave your query here" id="query-box" style={{height: "100px"}}></textarea>
            </div>

            <div className="col-auto submit-form">
                <button type="submit" className="btn btn-success mb-3">Submit</button>
            </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;