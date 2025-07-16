import Image from './assets/pic.jpg';
import Image1 from './assets/google1.png';
import Image2 from './assets/facebook1.png';
import Image3 from './assets/mail1.png';
import './PLogin.css'
const user ={
    imageSize : 620,
    imageSize_ : 735,
    imageSize__ : 50,
};
function PLogin(){
    return(
        <div className="bg-color5">
            
            <img
                className="log15"
                src={Image}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize,
                    width : user.imageSize_
                }}
            />
            <div className="back5">
                <h1 className="head5">Sign In</h1>
                
                <input type="email" placeholder="Email" className="email5" />
                <input type="password" placeholder="Password" className="pass5" />
                
                
                <button className="butt50">
                    Login
                </button>
                <img
                className="g1"
                src={Image1}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize__,
                    width : user.imageSize__
                }}
                />
                <img
                className="f1"
                src={Image2}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize__,
                    width : user.imageSize__
                }}
                />
                <img
                className="m1"
                src={Image3}
                alt={'Photo of' + Image}
                style={{
                    height: user.imageSize__,
                    width : user.imageSize__
                }}
                />
                <h2 className="reg5">Don`t have an account? </h2>
                <h2 className="reg35">Registration</h2>
            </div>
        </div>
    );
    
}

export default PLogin