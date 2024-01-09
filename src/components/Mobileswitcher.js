import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import '../styles/Mobileswitcher.css'
import { FaDesktop } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'


const Mobileswitcher = () => {

    const navigate = useNavigate();

    return (
        <div className="mobile-switcher">
            <div className="back-to-work" onClick={() => navigate(-1)}>
                <IoChevronBack /> Back to work
            </div>
            <div className="mobile-switcher-inner">
                <span> Case studies are dificult to visualize & formulate on mobile. It's better to just switch to a computer device. </span><br/>
                <span>You can also toggle to desktop view at any time</span><br/>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px"}}> 
                    <span>Press the <HiDotsVertical style={{marginBottom: "-2px"}}/> button, and toggle the </span>
                    <div style={{lineHeight: "1.6"}}>
                        <span style={{ backgroundColor: "#31363b", padding: "3px 8px", marginRight: "5px"}}><FaDesktop style={{marginBottom: "-3px", marginRight: "5px"}}/> Desktop site</span> 
                        option on the top right of your browser.
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Mobileswitcher;