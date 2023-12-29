import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/Projecttemplate.css'

function Template(props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
        
            // Adjust this threshold as needed
            const threshold = 100;
        
            setIsVisible(scrollTop + windowHeight < documentHeight - threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="project-head">
            <div className="sidebar">
                <div className={`${"sidebar-inner"} ${isVisible ? 'visible' : 'hidden'}`}>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "5px"}}>Contents</div>
                    <div style={{ width: "100%", height: "4px", backgroundColor: "#2C8DD3" }}></div>
                    {props.SidebarContent}
                </div>
            </div>
            <div className="head-content" >
                <label htmlFor="" className="pname" id='Section1'> {props.Title} </label><br/>
                <label htmlFor="" className="psub"> {props.Subtitle} </label>
                <div className="ov-dt">
                    <div className="overview" >
                        <div className="ti">Project Overview</div>
                        <div className="ov-text" >{props.Overview}</div>
                    </div>
                    <div className="details" >
                        <div  className="ti">Project Details</div>
                        <div className="dt-text" id="Section2">{props.Details}</div>
                    </div>
                </div>
                <div className="problem-objective-goals" >
                    <div className="problem ti" >{props.addTitle}</div>
                    <p className="p-text" id="Section3">{props.Problem}</p>
                    <div className="objective ti">Objective</div>
                    <p className="ob-text" id="Section4">{props.Objective}</p>
                    <div className="goals ti">Goals</div>
                    <p className="g-text" id='Section5'>{props.Goals}</p>
                </div>
                <div className="body" >
                    {props.body}
                </div>
            </div>
        </div>
    )
}

export default Template;
