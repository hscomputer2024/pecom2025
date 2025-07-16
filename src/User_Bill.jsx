import './User_Bill.css';
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
function User_Bill(){
    return(
        <div className="bbg_bk18">
            <div className="bbg_bk1_08">
                <h2  className="bbg_bk1_008">Back</h2>
            </div>
            <div className="bck18">
                <div className="bck108">
                    <img
                            className="hdd1"
                            src={Image1}
                            style={{
                                height: user.imageSize___,
                                width: user.imageSize___
                            }}
                        />
                    <div className="bfb18">
                        <h2 className="bfb108">P-COMMERCE</h2>
                    </div>
                    <div className="tn10">
                        <h2 className="tn100">TNO. :</h2>
                        <input type="text" placeholder='1' className="tn101" readOnly />
                    </div>
                    <div className="bck1008">
                        <h2 className="btx18">Half Biriyani</h2>
                        <h2 className="btx108">Price : 100/-</h2>
                        <h2 className="lx1">Qty. :</h2>
                        <h2 className="bx1">+</h2>
                        <input type="text" placeholder="1" className="bx10"/>
                        <h2 className="bx100">-</h2>
                        <img
                            className="bpiz18"
                            src={Image1}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck10082">
                        <h2 className="btx182">Chicken Pizza</h2>
                        <h2 className="btx1082">Price : 300/-</h2>
                        <h2 className="lx12">Qty. :</h2>
                        <h2 className="bx12">+</h2>
                        <input type="text" placeholder="1" className="bx102"/>
                        <h2 className="bx1002">-</h2>
                        <img
                            className="bpiz182"
                            src={Image2}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck10083">
                        <h2 className="btx183">Fried Rice</h2>
                        <h2 className="btx1083">Price : 115/-</h2>
                        <h2 className="lx13">Qty. :</h2>
                        <h2 className="bx13">+</h2>
                        <input type="text" placeholder="1" className="bx103"/>
                        <h2 className="bx1003">-</h2>
                        <img
                            className="bpiz183"
                            src={Image3}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck10084">
                        <h2 className="btx184">Butter Panner</h2>
                        <h2 className="btx1084">Price : 120/-</h2>
                        <h2 className="lx14">Qty. :</h2>
                        <h2 className="bx14">+</h2>
                        <input type="text" placeholder="1" className="bx104"/>
                        <h2 className="bx1004">-</h2>
                        <img
                            className="bpiz184"
                            src={Image4}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <div className="bck10085">
                        <h2 className="btx185">Chicken Lollipop</h2>
                        <h2 className="btx1085">Price : 350/-</h2>
                        <h2 className="lx15">Qty. :</h2>
                        <h2 className="bx15">+</h2>
                        <input type="text" placeholder="1" className="bx105"/>
                        <h2 className="bx1005">-</h2>
                        <img
                            className="bpiz185"
                            src={Image5}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                    </div>
                    <button className="gd1">
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
}
export default User_Bill