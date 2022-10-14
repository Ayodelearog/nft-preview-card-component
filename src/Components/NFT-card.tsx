import "./Styles/NFT-card.scss"
import "../images/image-avatar.png";
import "../images/image-equilibrium.jpg";
import { BrowserRouter as Router, Link} from "react-router-dom";



export const NftCard = () => {
    const avatar = require("../images/image-avatar.png");
    const equilibriumImg = require("../images/image-equilibrium.jpg");
    

    return <div className="card-container">
        <div className="nft-card">
            <div className="nft-card-content-wrapper">
                <div className="nft-image">

                    <div className="overlay">
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
                    </div>
                    <img src={equilibriumImg} alt="" />
                </div>

                <div className="nft-text">
                    <h2>Equilibrium #3429</h2>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                </div>

                <div className="eth-amount-countdown">
                    <div className="eth">
                        <div id="eth-icon">

                        </div>

                        <div id="eth-value">
                            <p>0.041 ETH</p>
                        </div>
                        
                    </div>

                    <div className="countdown">
                        <div id="clock-icon">

                        </div>

                        <div id="days-left">
                            <p>3 days left</p>
                        </div>
                        
                    </div>
                </div>

                <div className="displayPicture-name">
                    <img src={avatar} alt="" />
                    <p>
                        <span>Creation of</span> <span id="span-Jules">Jules Wyvern</span>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="attribution">
            <Router>
                <p>Challenge by <Link to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link>.</p>
                <p>Coded by <Link to="https://github.com/Ayodelearog">Ayodele Arogundade</Link>.</p>
            </Router>
        </div>
    </div>
}