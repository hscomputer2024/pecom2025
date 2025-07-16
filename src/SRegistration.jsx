import Image from './assets/pic2.jpg';
import './SRegistration.css'
const user ={
    imageSize : 620,
    imageSize_ : 735,
    imageSize__ : 50,
};
function SRegistration(){
    return(
        <div className="bg-color584">
            
            <img
                className="log1584"
                src={Image}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize,
                    width : user.imageSize_
                }}
            />
            <div className="back584">
                <h1 className="head584">Sign Up</h1>
                <input type="name" placeholder="Name" className="name84" />
                <input type="contact" placeholder="Contact" className="con84" />
                <input type="email" placeholder="Email" className="email584" />
                <input type="file" placeholder="Aadhaar No." className="aad584" />
                <input type="password" placeholder="Password" className="pass584" />
                <button className="butt5084">
                    Sign Up
                </button>
                
            </div>
        </div>
    );
    
}

export default SRegistration