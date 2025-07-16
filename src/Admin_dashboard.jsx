import './Admin_dashboard.css';
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
function Admin_dashboard(){
    return(
        <div className="back_bg1">
            <div className="head1">
                Welcome , Admin Panel
            </div>
            {/*<input type="text" placeholder="Welcome , Admin Name" readOnly className="head1"/>*/}
            <div className="side1">
                <button className="butt1">
                    <img
                        className="img1"
                        src={Image1}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm1">Dashboard</div>
                </button>
                <button className="butt2">
                    <img
                        className="img2"
                        src={Image2}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm2">Add Stokes</div>
                </button>
                <button className="butt3">
                    <img
                        className="img3"
                        src={Image3_0}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm3">Remove Stokes</div>
                </button>
                <button className="butt4">
                    <img
                        className="img4"
                        src={Image3}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm4"> Check Sales</div>
                </button>
                <button className="butt5">
                    <img
                        className="img5"
                        src={Image4}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm5">Check Orders</div>
                </button>
                <button className="butt6">
                    <img
                        className="img6"
                        src={Image5}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm6">Add Staff</div>
                </button>
                <button className="butt7">
                    <img
                        className="img7"
                        src={Image5_0}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm7">Remove Staff</div>
                </button>
                <button className="butt8">
                    <img
                        className="img8"
                        src={Image6_0}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm8">Check Items</div>
                </button>
                <button className="butt9">
                    <img
                        className="img9"
                        src={Image6}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm9">Staff Payment</div>
                </button>
                <button className="butt10">
                    <img
                        className="img10"
                        src={Image7}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm10">Today Payments</div>
                </button>
                <button className="butt11">
                    <img
                        className="img11"
                        src={Image8}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm11">Offer`s Set</div>
                </button>
                <button className="butt12">
                    <img
                        className="img12"
                        src={Image9}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <div className="nm12">Log Out</div>
                </button>
            </div>

            <div className="side2">
                <div className="side2_0">
                    <img
                        className="phot1"
                        src={Image20}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize__
                        }}
                    /> 
                    <h2 className="txt1">P-COMMERCE</h2>
                    <img
                        className="phot2"
                        src={Image22}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                    /> 
                </div>
            </div>

            <div className="bottom3">
                <div className="bott1">
                    <div className="bott1_0">
                        <h2 className="bott1_0_0">Today Sales</h2>
                        <img
                        className="img30"
                        src={Image30}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott1_0_0_0">
                            <h2 className="bott1_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>

                <div className="bott2">
                    <div className="bott2_0">
                        <h2 className="bott2_0_0">Order Lists</h2>
                        <img
                        className="img30"
                        src={Image4}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott2_0_0_0">
                            <h2 className="bott2_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>

                <div className="bott3">
                    <div className="bott3_0">
                        <h2 className="bott3_0_0">Check Stocks</h2>
                        <img
                        className="img30"
                        src={Image2}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott3_0_0_0">
                            <h2 className="bott3_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
                <div className="bott4">
                    <div className="bott4_0">
                        <h2 className="bott4_0_0">Staff Lists</h2>
                        <img
                        className="img30"
                        src={Image5}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott4_0_0_0">
                            <h2 className="bott4_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
                <div className="bott5">
                    <div className="bott5_0">
                        <h2 className="bott5_0_0">Check Items</h2>
                        <img
                        className="img30"
                        src={Image3}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott5_0_0_0">
                            <h2 className="bott5_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
                
                <div className="bott6">
                    <div className="bott6_0">
                        <h2 className="bott6_0_0">Stocks Out</h2>
                        <img
                        className="img30"
                        src={Image32}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott6_0_0_0">
                            <h2 className="bott6_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
                <div className="bott7">
                    <div className="bott7_0">
                        <h2 className="bott7_0_0">LMonth Sales</h2>
                        <img
                        className="img30"
                        src={Image7}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott7_0_0_0">
                            <h2 className="bott7_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
                
                <div className="bott8">
                    <div className="bott8_0">
                        <h2 className="bott8_0_0">Offer`s Set</h2>
                        <img
                        className="img30"
                        src={Image8}
                        style={{
                            height : user.imageSize_,
                            width : user.imageSize_
                        }}
                        /> 
                        <div className="bott8_0_0_0">
                            <h2 className="bott8_0_0_00">Show Lists</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin_dashboard