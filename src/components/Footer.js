import React from 'react';
import '../styles/Footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaDeviantart} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

function Footer(props) {
    return(
        <div className="footer-body">
            <div className="head">
                <div className="fs1">
                    <div className="circle"></div>
                    <div className="lines"></div>
                </div>
                <div>Thank you for stopping by!</div>
                <div className="fs2">
                    <div className="lines"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <span className="others-text">Others</span>
                    <div className="other-links">
                        <span>Back to Top</span>
                        <span>Writeups</span>
                        <a href="https://drive.google.com/file/d/1j0v0vWek-RkQ_NCJxLCYr7el1Sb64kZH/view?usp=sharing">
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <span className="social-text">Socials</span>
                    <div className="icons">
                        <a href="https://www.instagram.com/qitzuphyn/">
                            <AiFillInstagram className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/anirban-tasfin-azad-36177916a/">
                            <AiFillLinkedin className="icon"/>
                        </a>
                        <a href="https://www.deviantart.com/onirban2">
                            <FaDeviantart className="icon"/>
                        </a>
                        <a href="https://github.com/Anirban-45">
                            <AiFillGithub className="icon"/>
                        </a>
                    </div>
                    <span className="rights">©2022 all rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
