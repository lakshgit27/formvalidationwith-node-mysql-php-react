import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center  align-items-center bg-dark vh-100'>
         <div className='bg-white p-3 rounded w-25'>
            <form action=''>
            <div className='mb-3'>
                <h2>Sign-Up</h2>
                    <label htmlFor='email'><strong>Name</strong></label>
                    <input type='email' placeholder='Enter your email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter your email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter your Password' className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                <p>You agree to our terms and Policies</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>





        

    </div>
  )
}

export default Signup