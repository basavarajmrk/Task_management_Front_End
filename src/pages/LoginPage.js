import React, {useState} from "react";
import {useNavigate } from 'react-router-dom';
import {login} from '../services/Auth-related';

const LoginPage = () =>{
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();

        try{
            const {access} = await login(email, password);
            localStorage.setItem('token', access);
            navigate('/dashboard');

        } catch (err){
            setError('Invalid username or password');
        }
        
    };
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                <label>Username:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value= {password} onChange = {(e)=> setPassword(e.target.value)} required />
                </div>
                    <button type="submit">Login</button>

            </form>
            {error && <p>{error}</p>}
        </div>
    );

};

export default LoginPage




