import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Image from './assets/pic2.jpg';
import './Registration.css'
const user ={
    imageSize : 620,
    imageSize_ : 735,
};
function Registration(){
    const navigate = useNavigate();
    
    const go_Reg = () =>{
        navigate('/successR');
    };
    return(
        <div className="bg-color1">
            <h1 className="head1">Registration</h1>
            <img
                className="reg12"
                src={Image}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize,
                    width : user.imageSize_
                }}
            />

            <input type="name" placeholder="Name" className="name1" />
            <input type="Number" placeholder="Contact" className="con1" />
            <input type="email" placeholder="Email" className="email1" />
            <input type="password" placeholder="Password" className="pass1" />
            <input type="password" placeholder="Re-Password" className="pass12" />
            
            <button onClick={go_Reg} className="butt1">
                Register
            </button>
            <h2 className="log12">You have an account? </h2>
            <Link to="/" className="log3">Login</Link>
            
        </div>
    );
    
}

export default Registration