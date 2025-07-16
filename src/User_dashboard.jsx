import Image from './assets/fillter1.jpg';
import Image2 from './assets/menu1.jpg';
import Image3 from './assets/offer1.png';
import Image4 from './assets/help1.png';
import Image5 from './assets/signin1.png';
import Image6 from './assets/cart1.png';
import Image7 from './assets/biriyani1.jpeg';
import Image8 from './assets/pizza1.jpeg';
import Image9 from './assets/chicken1.jpg';
import Image10 from './assets/paneer1.jpg';
import Image11 from './assets/khichdi1.jpg';
import Image12 from './assets/kabab1.jpg';
import Image13 from './assets/lassi1.jpeg';
import Image14 from './assets/lollipop1.jpg';



import Image15 from './assets/fried1.jpg';
import Image16 from './assets/chilli1.jpg';
import Image17 from './assets/mughlai.jpg';
import Image18 from './assets/chaumin1.jpg';
import Image19 from './assets/hakka1.jpg';
import Image20 from './assets/manchurian1.jpeg';
import Image21 from './assets/gobimanchurian1.jpg';
import Image22 from './assets/szechuandishes1.jpeg';
import './User_dashboard.css';
const user={
    imageSize: 40,
    imageSize_: 168,
    imageSize__ : 255,
};
function User_dashboard(){
    return(
        <div className="back_color1">
            <div className="back_cl1">
                <div className="hed1">
                    <h2 className="hd1">P-COMMERCE</h2>
                </div>
                <input type="text" placeholder="Search" className="hed2" />
                <div className="hed2_0">
                    <img 
                        className="ig2"
                        src={Image}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd2">FILTER</h2>
                </div>
                <div className="hed3">
                    <img 
                        className="ig3"
                        src={Image2}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd3">MENU</h2>
                </div>
                <div className="hed4">
                    <img 
                        className="ig4"
                        src={Image3}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd4">OFFERS</h2>
                </div>
                <div className="hed5">
                    <img 
                        className="ig5"
                        src={Image4}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd5">HELP</h2>
                </div>
                <div className="hed6">
                    <img 
                        className="ig6"
                        src={Image5}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd6">SIGN IN</h2>
                </div>
                <div className="hed7">
                    <img 
                        className="ig7"
                        src={Image6}
                        style={{
                            height : user.imageSize,
                            width : user.imageSize
                        }}
                    />
                    <h2 className="hd7">Cart</h2>
                </div>



                <div className="back_cl2">
                    <div className="bkc2">
                        <h2 className="bk2">What's on your mind?</h2>
                    </div>
                    <div className="b1">
                        <img 
                            className="bg1"
                            src={Image7}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd1">Biriyani</h2>
                    </div>
                    <div className="b2">
                        <img 
                            className="bg2"
                            src={Image8}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd2">Pizza</h2>
                    </div>
                    <div className="b3">
                        <img 
                            className="bg3"
                            src={Image9}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd3">Chicken Kosha</h2>
                    </div>
                    <div className="b4">
                        <img 
                            className="bg4"
                            src={Image10}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd4">Butter Panner</h2>
                    </div>
                </div>
                <div className="back_cl3">
                    <div className="bkc28">
                        <h2 className="bk28">Do you like offers</h2>
                    </div>
                    <div className="b18">
                        <img 
                            className="bg18"
                            src={Image11}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd18">Khichdi -20%</h2>
                    </div>
                    <div className="b28">
                        <img 
                            className="bg28"
                            src={Image12}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd28">Kabab -30%</h2>
                    </div>
                    <div className="b38">
                        <img 
                            className="bg38"
                            src={Image13}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd38">Lassi -15%</h2>
                    </div>
                    <div className="b48">
                        <img 
                            className="bg48"
                            src={Image14}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd48">C.Lollipop -25%</h2>
                    </div>
                </div>
                <div className="back_cl4">
                    <div className="bkc25">
                        <h2 className="bk25">Do you like this type of food</h2>
                    </div>
                    <div className="b15">
                        <img 
                            className="bg15"
                            src={Image15}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd15">Fried Rice</h2>
                    </div>
                    <div className="b25">
                        <img 
                            className="bg25"
                            src={Image16}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd25">Chilli Chicken</h2>
                    </div>
                    <div className="b35">
                        <img 
                            className="bg35"
                            src={Image17}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd35">Mughlai</h2>
                    </div>
                    <div className="b45">
                        <img 
                            className="bg45"
                            src={Image18}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd45">Chicken Chaumin</h2>
                    </div>
                </div>
                <div className="back_cl5">
                    <div className="bkc29">
                        <h2 className="bk29">Do you like Chinese?</h2>
                    </div>
                    <div className="b19">
                        <img 
                            className="bg19"
                            src={Image19}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd19">Hakka Noodles</h2>
                    </div>
                    <div className="b29">
                        <img 
                            className="bg29"
                            src={Image20}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd29">Manchurian</h2>
                    </div>
                    <div className="b39">
                        <img 
                            className="bg39"
                            src={Image21}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd39">Gobi Manchurian</h2>
                    </div>
                    <div className="b49">
                        <img 
                            className="bg49"
                            src={Image22}
                            style={{
                                height : user.imageSize_,
                                width : user.imageSize__
                            }}
                        />
                        <h2 className="bd49">Szechuan Dishes</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default User_dashboard