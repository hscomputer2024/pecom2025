import './Check_Offer.css';
import Image1 from './assets/biriyani1.jpeg';
import Image2 from './assets/p2.jpeg';
import Image3 from './assets/fried1.jpg';
import Image4 from './assets/paneer1.jpg';
import Image5 from './assets/lollipop1.jpg';
const user={
    imageSize:209,
    imageSize_ : 246,
};
function Check_Offer(){
    return(
        <div className="bg_bk184">
            <div className="bg_bk1_084">
                <h2  className="bg_bk1_008">Back</h2>
            </div>
            <div className="ck184">
                <div className="ck1084">
                    <div className="fb184">
                        <h2 className="fb1084">Check Offers</h2>
                    </div>
                    <div className="ck10084">
                        <h2 className="tx184">Half Biriyani</h2>
                        <h2 className="tx1084">Price : 80/-</h2>
                        <img
                            className="piz184"
                            src={Image1}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx184">
                            <h2 className="txx1084">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck20084">
                        <h2 className="tx284">Chicken Pizza</h2>
                        <h2 className="tx2084">Price : 315/-</h2>
                        <img
                            className="piz284"
                            src={Image2}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx284">
                            <h2 className="txx2084">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck30084">
                        <h2 className="tx384">Fried Rice</h2>
                        <h2 className="tx3084">Price : 180/-</h2>
                        <img
                            className="piz384"
                            src={Image3}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx384">
                            <h2 className="txx3084">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck40084">
                        <h2 className="tx484">Butter Panner Masala</h2>
                        <h2 className="tx4084">Price : 99/-</h2>
                        <img
                            className="piz484"
                            src={Image4}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx484">
                            <h2 className="txx4084">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck50084">
                        <h2 className="tx584">Chicken Lollipop</h2>
                        <h2 className="tx5084">Price : 289/-</h2>
                        <img
                            className="piz584"
                            src={Image5}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx584">
                            <h2 className="txx5084">+ ADD</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Check_Offer