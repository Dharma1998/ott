import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react'

const SignUp = () => {
    let username=useRef()
    let email=useRef()
    let password=useRef()
    let confirmpassword=useRef()
    let phone=useRef()
    let dob=useRef()

   // let [status,setstatus]=useState();
// let verifyEmail=()=>{

//   fetch(url ,Options)
//   .then((res)=>{return res.json()})
//   .then((data)=>{console.log(data,status)})
// }
   let navigate = useNavigate()
   useEffect(()=>{
    if(localStorage.getItem("userdetails")!=null)
    {
      navigate("/home")
    }
   },[])

    let  handleAddUser=(e)=>{
        e.preventDefault();
        let newUser={
                 username:username.current.value,
                 email:email.current.value,
                 password:password.current.value,
                 dob:dob.current.value,
                 phone:phone.current.value
        }
        fetch(" http://localhost:5000/users",
                                            {
                                                 method : "POST" ,
                                                 headers : {"Content-Type" : "application/json"},
                                                 body : JSON.stringify(newUser)
                                              } )
         .then(()=>{
                     alert("new data added");
                    //window.location.reload();
                     navigate("/login");
                                  })
                                                      
    }
  return (
    <div className='signup-cont'>
      <div className='signup-box'>
        <h1>Sign Up</h1>
        <hr  />
        <form onSubmit={handleAddUser} className='form'>
            <input className='inp' type="text" placeholder='Enter Your Name' ref={username} required/>
            <input className='inp' type="email" placeholder='Enter Your Email' ref={email} required/>
            <input className='inp' type="password" placeholder='Create Password' ref={password} required/>
            <input className='inp' type="text" placeholder='Confirm Password'ref={confirmpassword} required/>
            <input className='inp' type="date"  ref={dob}required/>
            <input className='inp' type="tel" placeholder='Phone number' max="10" min="10"ref={phone}required />
            <input className='submit' type="submit" value={SignUp}  />
            <span>Already have an account</span><Link to="/login">Login</Link>
            
        </form>
        {/* <button onClick={}>verify email</button> */}
      </div>
    </div>
  )
}

export default SignUp