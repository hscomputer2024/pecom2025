import './Check_Menu.css';
import Image1 from './assets/biriyani1.jpeg';
import Image2 from './assets/p2.jpeg';
import Image3 from './assets/fried1.jpg';
import Image4 from './assets/paneer1.jpg';
import Image5 from './assets/lollipop1.jpg';
const user={
    imageSize:209,
    imageSize_ : 246,
};
function Check_Menu(){
    return(
        <div className="bg_bk18">
            <div className="bg_bk1_08">
                <h2  className="bg_bk1_008">Back</h2>
            </div>
            <div className="ck18">
                <div className="ck108">
                    <div className="fb18">
                        <h2 className="fb108">Menu</h2>
                    </div>
                    <div className="ck1008">
                        <h2 className="tx18">Half Biriyani</h2>
                        <h2 className="tx108">Price : 100/-</h2>
                        <img
                            className="piz18"
                            src={Image1}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx18">
                            <h2 className="txx108">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck2008">
                        <h2 className="tx28">Chicken Pizza</h2>
                        <h2 className="tx208">Price : 350/-</h2>
                        <img
                            className="piz28"
                            src={Image2}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx28">
                            <h2 className="txx208">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck3008">
                        <h2 className="tx38">Fried Rice</h2>
                        <h2 className="tx308">Price : 190/-</h2>
                        <img
                            className="piz38"
                            src={Image3}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx38">
                            <h2 className="txx308">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck4008">
                        <h2 className="tx48">Butter Panner Masala</h2>
                        <h2 className="tx408">Price : 120/-</h2>
                        <img
                            className="piz48"
                            src={Image4}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx48">
                            <h2 className="txx408">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck5008">
                        <h2 className="tx58">Chicken Lollipop</h2>
                        <h2 className="tx508">Price : 320/-</h2>
                        <img
                            className="piz58"
                            src={Image5}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx58">
                            <h2 className="txx508">+ ADD</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Check_Menu