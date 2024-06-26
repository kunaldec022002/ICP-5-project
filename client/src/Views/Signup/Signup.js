import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import axios from 'axios'
import Navbar from "../../Components/Navbar/Navbar";

function Signup(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [ password, setPassword] = useState('')

    const signup = async ()=>{
        const response = await axios.post('/signup',{
            name:name,
            email:email,
            mobile:mobile,
            password:password
        });

        if(response.data.success)
        {
            alert(response.data.message);
            window.location.href = "/login";
        }

        else
        {
            alert("Please fill information first")
        }
    }
    return(

        
        
                        <div>
                            <Navbar/>

                            <div className="signup-container">
                                <h1 className="signup-title">Signup</h1>
                                <div className="input-container">
                                    <label className="input-label">Name</label>
                                    <input type="text"
                                    placeholder="enter your name"
                                    className="input-field"
                                    value={name}
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>

                                </div>

                                <div className="input-container">
                                    <label className="input-label">Email</label>
                                    <input type="email"
                                    placeholder="enter your email"
                                    className="input-field"
                                    value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>

                                </div>

                                <div className="input-container">
                                    <label className="input-label">Mobile</label>
                                    <input type="text"
                                    placeholder="enter your Mobile"
                                    className="input-field"
                                    value={mobile}
                                    onChange={(e)=>{
                                        setMobile(e.target.value)
                                    }}/>

                                </div>

                                <div className="input-container">
                                    <label className="input-label">Password</label>
                                    <input type="password"
                                    placeholder="enter your password"
                                    className="input-field"
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}/>

                                </div>

                                <span>Already have account? <Link to='/login' className='links'>Login</Link></span>

                                <button type="button"
                                onClick={signup} 
                                className="signup-btn">
                                    Signup
                                </button>

                            
                            </div>

                            
                        </div>
                    )
                }

export default Signup