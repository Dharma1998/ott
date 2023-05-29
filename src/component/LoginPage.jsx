import React from 'react'
import {Link} from 'react-router-dom'

const LoginPage = () => {

  return (
    <div className='mainLogin'>

        <form className='loginForm' >
             <h1 className='heading1'>Login</h1>
            <input className='inp1' type="email" placeholder='Enter your Email' />
            <input className='inp1' type="password" placeholder='password'/>
            <button className='btn2'>Login</button>
            <Link className='forgot' to="/reset">Forgot password?</Link>
        </form>
        
    </div>
  )
}

export default LoginPage