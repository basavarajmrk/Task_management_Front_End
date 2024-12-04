import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {signup } from '../services/Auth-related';

const SignupPage = () =>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSignup = async(e) =>{
        e.preventDefault();
        try{
        await signup(username, email, password);
        navigate('/');
        } catch (err){
            setError('Error creating account')
        }


    };
    return (
        <div>
             <h2>Signup</h2>
             <form onSubmit={handleSignup}>
                <div>
                <label> Userame</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label >Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required  />
                </div>
                <div>
                    <label >Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Signup</button>
             </form>
                {error && <p>{error}</p>}
        </div>
       
    );  
};
export default SignupPage;