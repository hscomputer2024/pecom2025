import './Employee_dashboard.css';
import Image1 from './assets/images.png';
import Image2 from './assets/images2.png';
import Image3_0 from './assets/images3.0.png';
import Image3 from './assets/images3.png';
import Image4 from './assets/images4.png';
import Image5_0 from './assets/images5.0.jpeg';
import Image5 from './assets/images5.png';
import Image6_0 from './assets/images6.0.png';
import Image6 from './assets/images6.png';
import Image7 from './assets/images7.jpg';
import Image8 from './assets/images8.png';
import Image9 from './assets/images9.png';

import Image20 from './assets/photo1.png';
import Image22 from './assets/photo2.png';

import Image30 from './assets/pic1.png';
import Image32 from './assets/pic3.png';
const user={
    imageSize : 45,
    imageSize_ :100,
    imageSize__ :120,
};
function Employee_dashboard(){
    return(
        <div className="back_bg15">
            <div className="head15">
                Welcome , Staff Panel
            </div>
            {/*<input type="text" placeholder="Welcome , Admin Name" readOnly className="head1"/>*/}
            <div className="side15">
                <button className="butt15">
                    <img
                        className="img15"
                        src={Image1}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm15">Dashboard</div>
                </button>
                <button className="butt25">
                    <img
                        className="img25"
                        src={Image2}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm25">Add Stokes</div>
                </button>
                <button className="butt35">
                    <img
                        className="img35"
                        src={Image3_0}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm35">Remove Stokes</div>
                </button>
                <button className="butt45">
                    <img
                        className="img45"
                        src={Image3}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm45"> Check Sales</div>
                </button>
                <button className="butt55">
                    <img
                        className="img55"
                        src={Image4}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm55">Check Orders</div>
                </button>
                <button className="butt65">
                    <img
                        className="img65"
                        src={Image6_0}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm65">Check Items</div>
                </button>
                <button className="butt75">
                    <img
                        className="img75"
                        src={Image8}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm75">Offer`s Set</div>
                </button>
                <button className="butt85">
                    <img
                        className="img85"
                        src={Image9}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm85">Log Out</div>
                </button>
            </div>

            <div className="side25">
                <div className="side2_05">
                    <img
                        className="phot15"
                        src={Image20}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize__
                        }}
                    /> 
                    <h2 className="txt15">P-COMMERCE</h2>
                    <img
                        className="phot25"
                        src={Image22}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                    /> 
                </div>
            </div>

            <div className="bottom35">
                <div className="bott15">
                    <div className="bott1_05">
                        <h2 className="bott1_0_05">Today Sales</h2>
                        <img
                        className="img305"
                        src={Image30}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott1_0_0_05">
                            <h2 className="bott1_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>

                <div className="bott25">
                    <div className="bott2_05">
                        <h2 className="bott2_0_05">Order Lists</h2>
                        <img
                        className="img305"
                        src={Image4}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott2_0_0_05">
                            <h2 className="bott2_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>

                <div className="bott35">
                    <div className="bott3_05">
                        <h2 className="bott3_0_05">Check Stocks</h2>
                        <img
                        className="img305"
                        src={Image2}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott3_0_0_05">
                            <h2 className="bott3_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>
                <div className="bott45">
                    <div className="bott4_05">
                        <h2 className="bott4_0_05">Offer`s Set</h2>
                        <img
                        className="img305"
                        src={Image8}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott4_0_0_05">
                            <h2 className="bott4_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>
                <div className="bott55">
                    <div className="bott5_05">
                        <h2 className="bott5_0_05">Check Items</h2>
                        <img
                        className="img305"
                        src={Image6_0}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott5_0_0_05">
                            <h2 className="bott5_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>
                
                <div className="bott65">
                    <div className="bott6_05">
                        <h2 className="bott6_0_05">Stocks Out</h2>
                        <img
                        className="img305"
                        src={Image32}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott6_0_0_05">
                            <h2 className="bott6_0_0_005">Show Lists</h2>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Employee_dashboard