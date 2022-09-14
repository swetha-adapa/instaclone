import Banner from "./routing-banner.webp";
import "./landing-page.css"
import {Link} from "react-router-dom";
const LandingPage=()=> {
    

    return(
        <>
        <div className="landing-container">
            <img src={Banner} alt="Banner "></img>
            <div className="pro">
            <h2>
                10x Team 04
            </h2>
            <Link to="post-view"><button>Enter</button></Link>
            </div>
        </div>
        </>
    )
}
export default LandingPage;