import Image from './assets/pic2.jpg';
import './URegistration.css'
const user ={
    imageSize : 620,
    imageSize_ : 735,
    imageSize__ : 50,
};
function URegistration(){
    return(
        <div className="bg-color58">
            
            <img
                className="log158"
                src={Image}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize,
                    width : user.imageSize_
                }}
            />
            <div className="back58">
                <h1 className="head58">Sign Up</h1>
                <input type="name" placeholder="Name" className="name8" />
                <input type="contact" placeholder="Contact" className="con8" />
                <input type="email" placeholder="Email" className="email58" />
                <input type="password" placeholder="Password" className="pass58" />
                <button className="butt508">
                    Sign Up
                </button>
                <h2 className="reg58">You have an account ? </h2>
                <h2 className="reg358">Sign In</h2>
            </div>
        </div>
    );
    
}

export default URegistration