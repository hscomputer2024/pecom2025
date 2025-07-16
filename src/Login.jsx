import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Image from './assets/pic.jpg';
import './Login.css'
const user ={
    imageSize : 620,
    imageSize_ : 735,
};
function Login(){
    const navigate = useNavigate();
    const go_Login = () =>{
        navigate('/successL');
    };
    return(
        <div className="bg-color">
            <h1 className="head">Login</h1>
            <img
                className="log1"
                src={Image}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize,
                    width : user.imageSize_
                }}
            />

            
            <input type="email" placeholder="Email" className="email" />
            <input type="password" placeholder="Password" className="pass" />
            
            
            <button onClick={go_Login} className="butt">
                Login
            </button>
            <h2 className="reg">Don`t have an account? </h2>
            <Link to="/registration" className="reg3">Registration</Link>
            
        </div>
    );
    
}

export default Login