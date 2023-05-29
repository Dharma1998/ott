import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {  useNavigate } from "react-router-dom";
const Profile=()=>{
    let [userdetails,setuserdeatils]=useState(null);
    let navigate=useNavigate();
    useEffect(()=>{
        let userdetails=JSON.parse(localStorage.getItem("userdetails"));
        setuserdeatils(userdetails)
    },[])

    let logout=()=>{
        localStorage.removeItem("userdetails");
        alert("logout successful");
       navigate("/login")
    }

    let deleteAccount=()=>{
    let pwd= prompt("Are you sure to delete,if yes please provide password ")
    if(pwd!=userdetails.password)
    {
        alert("password is invalid")
        return;
    }
    let config={method :"DELETE"};
    fetch("http://localhost:5000/users"+userdetails.id,config)
    .then(()=>{
        localStorage.removeItem("userdetails");
        alert("your account has been deleted permanently")
        navigate("/")
    })
    }
    return(
        <div className="profilepage">
         <Navbar/>
   {userdetails  &&<div id="user-details">
    <h1>{userdetails.username}</h1>
    <h1>{userdetails.email}</h1>
    <h1>{userdetails.dob}</h1>
    <button onClick={logout}>gout</button>
    <button onClick={deleteAccount}>Delete Account</button>

</div>}
           </div>

       
    )

}
export default Profile;