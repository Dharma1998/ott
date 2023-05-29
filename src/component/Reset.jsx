import React from 'react'

const Reset = () => {
  return (
    <div className='mainReset'>
      <div className='resetContainer'>
        
        <form action="" className='createPassword'>
           <h1>Reset Password</h1>
           <input className='inp3'  type="email" placeholder='Enter ur Email' />
           <input className='inp3' type="password" placeholder='Create new Password' />
           <input className='inp3' type="password" placeholder='Confirm password' />
           <button className='btn3'>Send OTP</button>
        </form>
        <form action="" className='conformOTP'>
           <input className='inp3' type="number" placeholder='Enter OTP' />
           <button className='btn3'>Reset</button>
        </form>
      </div>
    </div>
  )
}

export default Reset