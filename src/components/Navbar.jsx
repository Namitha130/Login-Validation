import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
     <nav class="navbar navbar-light">
       <div class="d-flex justify-content-between" >
            <Link to="/">
                <i class='bx bxs-home' ></i>
            </Link>
            
       </div>
        
        
    </nav>
     );
}
 
export default Navbar;