import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Offer} from "../components/Offer"
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import logo from '../assets/logo.png';

const Login = () => {
    
    const users = JSON.parse(localStorage.getItem("users")) || {}
    // Save users back to localStorage
    function saveUsers() {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // To add a new registered user
    function addUser(event) {
        event.preventDefault(); // stop form from refreshing

        let username = document.getElementById("newUsername").value.trim();
        let pswd = document.getElementById("newPassword").value.trim();
        let confirmPswd = document.getElementById("checkPassword").value.trim();

        console.log("Register attempt:", username, pswd, confirmPswd); // debug

        if (!username || !pswd) {
            alert("Please enter both username and password");
            return;
        }

        if (pswd !== confirmPswd) {
            alert("Passwords do not match!");
            return;
        }

        if (users[username]) {
            alert("User already registered!");
            return;
        }

        // Add new user
        users[username] = pswd;
        saveUsers();

        alert("User registered successfully!");
        const navigate = useNavigate();
        navigate("/"); // redirect
    }

    // To verify an authorized user 
    function verifyUser(event) {
        event.preventDefault(); // stop form from refreshing

        let username = document.getElementById("username").value.trim();
        let pswd = document.getElementById("inputPassword").value.trim();

        console.log("Login attempt:", username, pswd); // debug

        if (users[username] && users[username] === pswd) {
            alert("Login Successful!");
            window.location.href = "index.html"; // redirect
        } else {
            alert("Enter valid credentials!");
        }
    }

  return (
    <>
      <Offer />
      <NavBar />

      <div className="container login-form-container p-5">
        <h3 className="px-1">Login Here</h3>
        <p className="px-1">If new user, register <a href="#register-form-container">below</a></p>
        <form className="login-form px-3" onSubmit="verifyUser(event)">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Enter your phone number or email address</label>
                <input type="text" className="form-control" id="username" placeholder="example@example.com or +91 XXXXXXXXXX"/>
            </div>

            <div className="mb-2">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>

            <div className="col-auto login">
                <button type="submit" className="btn btn-success mb-3">Login</button>
            </div>

            <img id="logo-image" src={logo} alt="logo"/>
            <h2 style={{fontStyle: "italic"}}>AromaVerse - where every Blend tells a Story</h2>
        </form>
      </div>

      <div className="container register-form-container px-5" id="register-form-container">
        <h3 className="px-1 my-4">Register Here as new user</h3>
        <form  className="register-form px-3" onsubmit="addUser(event)">
            <div className="mb-3">
                <label htmlFor="newUsername" className="form-label">Enter your phone number or email address *</label>
                <input type="text" className="form-control" id="newUsername" placeholder="like example@example.com or +91 XXXXXXXXXX" required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Enter your full name *</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="like Smith Jones" required/>
            </div>

            <div className="mb-4">
                <label htmlFor="newPassword" className="form-label">Enter a new password *</label>
                <input type="password" id="newPassword" className="form-control" aria-describedby="passwordHelpBlock" required/>
                <div id="passwordHelpBlock" className="form-text mb-3" style={{color: "red"}}>
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji!
                </div>

                <label htmlFor="checkPassword" className="form-label">Re-enter the password *</label>
                <input type="password" id="checkPassword" className="form-control" aria-describedby="passwordHelpBlock" required/>
                <div id="passwordHelpBlock" className="form-text" style={{color: "red"}}>
                    Enter the same password as before
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="suggestionCategory" className="form-label">Enter your age group for personalized suggestions(Optional)</label>
                <select className="form-select" id="suggestionCategory" aria-label="Default select example">
                    <option selected>Select an option</option>
                    <option value="1">Below 5</option>
                    <option value="2">Above 5 and below 18</option>
                    <option value="3">Above 18 and below 30</option>
                    <option value="3">Above 30 and below 50</option>
                    <option value="3">Above 50</option>
                </select>
            </div>

            <div className="form-check mt-5">
                <input className="form-check-input" type="checkbox" value="" id="checkDefault" required/>
                <label className="form-check-label" htmlFor="checkDefault">
                    * By registering, I accept the <a href="#">Terms & Conditions</a>, and I understand my information is 
                    safe with us and used only to provide our services.
                </label>
            </div>

            <div className="col-auto register py-3">
                <button type="submit" className="btn btn-success mb-3">Register</button>
            </div>

            <p style={{color: "rgb(128, 30, 38);"}}>* indicates the necessary fields to be filled.</p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;