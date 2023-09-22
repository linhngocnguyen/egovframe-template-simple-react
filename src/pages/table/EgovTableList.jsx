import EgovTable from "components/EgovTable";
import EgovLeftNav from "components/EgovLeftNav";
import { Link } from "react-router-dom";
function EgovTableList() {
    return (  
        <div className="container">
            <div className="c_wrap">
            <div className="location">
                    <ul>
                        <li><Link to="/" className="home">Home</Link></li>
                        <li><Link to="/table">Table</Link></li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    <div id="contents">
                        <EgovTable></EgovTable>
                     </div>   
                </div>    
            </div>
        </div>
    );
}

export default EgovTableList;