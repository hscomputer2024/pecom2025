import './UFilter.css';
function UFilter(){
    return(
        <div className="fbg1">
            <div className="fbg10">
                <h2 className="fbg100">Back</h2>
            </div>
            <div className="ty1">
                <div className="ty10">
                    <h2 className="ty100">Filter</h2>
                </div>
                <div className="lk1">
                    <h2 className="r1">Price : </h2>
                    <input type="radio" className="r2" />
                    <h2 className="r3">Low to High</h2>
                    <input type="radio" className="r20" />
                    <h2 className="r30">High to Low</h2>
                    <input type="radio" className="r200" />
                    <h2 className="r300">Best Selling</h2>
                </div>
                <div className="lk2">
                    <h2 className="r1_0">Product</h2>
                    <input type="radio" className="r2_0" />
                    <h2 className="r3_0">VEG</h2>
                    <input type="radio" className="r2_00" />
                    <h2 className="r3_00">NON-VEG</h2>
                </div>
                <button className="bt110">
                    Apply
                </button>
                <div className="app110">
                    <h2 className="app100">Clear</h2>
                </div>
            </div>
        </div>
    );
}
export default UFilter