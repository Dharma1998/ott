import { Link } from "react-router-dom";
const Navbar=()=>
{
    return(
<nav>
    <div className="logo">
        <Link to="/home">Travel karo</Link>
    </div>
    
    
    <div className="tickets">
        <Link to="/bus">Bus</Link>
        <Link to="/flight">flight</Link>
        <Link to="/active">Active</Link>
        <Link to="/profile">profile</Link>

    </div>
    <div className="profile">
        <button >Logout</button>
    </div>
</nav>
    )
}
export default Navbar;