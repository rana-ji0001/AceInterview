import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loading, handleRegister} = useAuth()





    const handleSubmit = async(e) =>{
        e.preventDefault();
        await handleRegister({username, email, password});
        navigate("/")

    }
    if(loading){
        return(<main><h1>loading....</h1></main>)
    }
  return (
    <main>
        <div className='form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" id='username' name='username' placeholder='Enter Usernamel' />

                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" id='email' name='email' placeholder='Enter Email' />

                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" id='password' name='password' placeholder='Enter Password!' />

                </div>
                <button className='button primary-button'>Register</button>
            </form>
            <p>Already Have an Account?<Link to={'/login'}>Login</Link></p>

        </div>
    </main>
  )
}

export default Register
