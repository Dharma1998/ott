import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home=()=>{
    return(
        <div className="homepage">
           <Navbar/>
           <div className="box">
           <div className="box1">
            <img src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1663592414.jpg?width=360" />
            <Link to="/bus">BUS</Link>
           </div>
           <div className="box2">
            <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2023/3/21/w900X450/IndiGo_PTI_Image.jpg?w=400&dpr=2.6" alt="" />
            <Link to="/flight">FLIGHT</Link>
           </div>
           </div>
           <Footer/>
        </div>
    )
}
export default Home;