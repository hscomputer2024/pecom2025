import './S_Bill.css';
import Image1 from './assets/biriyani1.jpeg';
import Image2 from './assets/p2.jpeg';
import Image3 from './assets/fried1.jpg';
import Image4 from './assets/paneer1.jpg';
import Image5 from './assets/lollipop1.jpg';
const user={
    imageSize:209,
    imageSize_ : 246,
    imageSize___ : 90,
};
function S_Bill(){
    return(
        <div className="bbg_bk189">
            <div className="bbg_bk1_089">
                <h2  className="bbg_bk1_0089">Back</h2>
            </div>
            <div className="bck189">
                <div className="bck1089">
                    <img
                            className="hdd19"
                            src={Image1}
                            style={{
                                height: user.imageSize___,
                                width: user.imageSize___
                            }}
                        />
                    <div className="bfb189">
                        <h2 className="bfb1089">P-COMMERCE</h2>
                    </div>
                    <div className="tn109">
                        <h2 className="tn1009">TNO. :</h2>
                        <input type="text" placeholder='1' className="tn1019" readOnly />
                    </div>
                    <div className="bck10089">
                        <h2 className="btx189">Half Biriyani</h2>
                        <h2 className="btx1089">Price : 100/-</h2>
                        <h2 className="lx19">Qty. :</h2>
                        <h2 className="bx19">+</h2>
                        <input type="text" placeholder="1" className="bx109"/>
                        <h2 className="bx1009">-</h2>
                        <img
                            className="bpiz189"
                            src={Image1}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck100829">
                        <h2 className="btx1829">Chicken Pizza</h2>
                        <h2 className="btx10829">Price : 300/-</h2>
                        <h2 className="lx129">Qty. :</h2>
                        <h2 className="bx129">+</h2>
                        <input type="text" placeholder="1" className="bx1029"/>
                        <h2 className="bx10029">-</h2>
                        <img
                            className="bpiz1829"
                            src={Image2}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck100839">
                        <h2 className="btx1839">Fried Rice</h2>
                        <h2 className="btx10839">Price : 115/-</h2>
                        <h2 className="lx139">Qty. :</h2>
                        <h2 className="bx139">+</h2>
                        <input type="text" placeholder="1" className="bx1039"/>
                        <h2 className="bx10039">-</h2>
                        <img
                            className="bpiz1839"
                            src={Image3}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck100849">
                        <h2 className="btx1849">Butter Panner</h2>
                        <h2 className="btx10849">Price : 120/-</h2>
                        <h2 className="lx149">Qty. :</h2>
                        <h2 className="bx149">+</h2>
                        <input type="text" placeholder="1" className="bx1049"/>
                        <h2 className="bx10049">-</h2>
                        <img
                            className="bpiz1849"
                            src={Image4}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck100859">
                        <h2 className="btx1859">Chicken Lollipop</h2>
                        <h2 className="btx10859">Price : 350/-</h2>
                        <h2 className="lx159">Qty. :</h2>
                        <h2 className="bx159">+</h2>
                        <input type="text" placeholder="1" className="bx1059"/>
                        <h2 className="bx10059">-</h2>
                        <img
                            className="bpiz1859"
                            src={Image5}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <button className="gd19">
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default S_Bill