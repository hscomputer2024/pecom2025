import './Check_Stocks.css';
import Image1 from './assets/p1.jpg';
import Image2 from './assets/p2.jpeg';
import Image3 from './assets/p3.jpg';
import Image4 from './assets/p4.jpeg';
import Image5 from './assets/p5.jpeg';
const user={
    imageSize:209,
    imageSize_ : 246,
};
function Check_Stocks(){
    return(
        <div className="bg_bk1">
            <div className="bg_bk1_0">
                <h2  className="bg_bk1_00">Back</h2>
            </div>
            <div className="ck1">
                <div className="ck10">
                    <div className="fb1">
                        <h2 className="fb10">Ckeck Items</h2>
                    </div>
                    <div className="ck100">
                        <h2 className="tx1">Paneer Pizza</h2>
                        <h2 className="tx10">Price : 200/-</h2>
                        <img
                            className="piz1"
                            src={Image1}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx1">
                            <h2 className="txx10">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck200">
                        <h2 className="tx2">Chicken Pizza</h2>
                        <h2 className="tx20">Price : 350/-</h2>
                        <img
                            className="piz2"
                            src={Image2}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx2">
                            <h2 className="txx20">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck300">
                        <h2 className="tx3">Cheese Pizza</h2>
                        <h2 className="tx30">Price : 190/-</h2>
                        <img
                            className="piz3"
                            src={Image3}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx3">
                            <h2 className="txx30">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck400">
                        <h2 className="tx4">Margherita Pizza</h2>
                        <h2 className="tx40">Price : 120/-</h2>
                        <img
                            className="piz4"
                            src={Image4}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx4">
                            <h2 className="txx40">+ ADD</h2>
                        </div>
                    </div>
                    <div className="ck500">
                        <h2 className="tx5">Chicken Feast Pizza</h2>
                        <h2 className="tx50">Price : 520/-</h2>
                        <img
                            className="piz5"
                            src={Image5}
                            style={{
                                height: user.imageSize,
                                width: user.imageSize_
                            }}
                        />
                        <div className="txx5">
                            <h2 className="txx50">+ ADD</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Check_Stocks