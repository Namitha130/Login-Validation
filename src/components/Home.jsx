import { useRef , useState} from "react";
import {Link , useNavigate} from "react-router-dom"

const Home = () => {
    let email = useRef();
    let pwd = useRef();
    let [userDetails , setUserDetails]= useState(null)
    let navigate = useNavigate()
    
    let handleLogin = (e) => {
        e.preventDefault();
        let data =JSON.parse(localStorage.getItem("userdetails"))
         setUserDetails(data)
        // console.log(data);
        let user = data.email === email.current.value

       
        if( user === undefined)
        {
            alert("user not found")
        }
        else if( data.pwd !== pwd.current.value)
        {
            alert("Invalid password");
        }
        else{
            alert("login successfull");
            localStorage.setItem("userdetails" , JSON.stringify(user));
           navigate("/check")
        }
        
         
    }
    return ( 
        <div id="home-page" class="container-fluid">
    
    <div class="container-fluid" id="image">
        <img src="https://www-cdn.eumetsat.int/files/styles/1_1_medium/s3/2022-07/clouds_sun-rays_aspot_AdobeStock.jpg?h=d1cb525d&itok=lbNetQFH"></img>
        <h3> <q>When there are patches of clouds <br/> in the sky and you can see the sun, <br/>it is not going to storm.</q></h3>
    </div>
    <div id="content" class="container-fluid">     
    <div id="login-form" className="container">
            <h1 style={ {color: "#26057a"}}>Login or Signup </h1>
            <hr/>
            <form onSubmit={handleLogin} class="row g-3">
                <input type="email" placeholder="Email" ref={email} required/>
                <input type="password" placeholder="Password" ref={pwd} required/>
                
                <input type="submit" value="Login" />
            </form>
            <span>Don't have an account ?  </span> <br/>
            <Link to="/signup"><button>Create account</button></Link>

    </div>
    </div>
  
    
</div>
        
     );
}
 
export default Home;