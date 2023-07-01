
import { useEffect, useRef, useState } from "react";
import {Link ,useNavigate} from "react-router-dom"
const Sign_up = () => {
    let [userdetials, setUserDetails]  = useState(null)
    let navigate=useNavigate();
    let username = useRef();
    let email = useRef();
    let pwd = useRef();
    let phone = useRef();
    let dob = useRef();
    let city = useRef()

    let handleSignup = (e) =>{
        e.preventDefault();
        if (new Date() < new Date(dob.current.value)) {
            alert("Invalid birth date")
            return
        }
        let newUser = {
            username: username.current.value,
            email: email.current.value,
            phone: phone.current.value,
            pwd: pwd.current.value,
            city: city.current.value,
            dob: dob.current.value

        }
        console.log(newUser);
        localStorage.setItem("userdetails",JSON.stringify(newUser))
        alert("Account created successfully")
        navigate("/")

}
       
    return ( 
        <div id="app" className="container"> 
        <div id="signup-form" className="container">
            <h1  style={ {color: "#26057a"}}>Sign-Up Form</h1>
            <hr/>
                <form class="row g-3" onSubmit={handleSignup}>
                    <input type="text" placeholder="Username"  ref={username}required />
                    <input type="email" placeholder="Email address" ref={email} required/>
                    <input type="password" placeholder="Password" ref={pwd} required/> 
                    <input type="tel" placeholder="Phone number"  ref={phone} maxlength="10" minlength="10" required/>
                    <input type="date" placeholder="Date of Birth" ref={dob} required />
                    <input type="text" placeholder="City" ref={city} required/>

                    <input type="submit" value="Sign-up"/>
                </form>
                <p> Already have an account? <Link to="/" style={{color:" #050442"}}> Login </Link></p>
        </div>
        </div>
     );
}
 
export default Sign_up;