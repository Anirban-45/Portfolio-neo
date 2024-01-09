import React from 'react';
import Template from './Template';
import '../../styles/Oxfo.css';
import Oxfopage from '../../assets/Oxfo/Oxfo.png';
import Mobileswitcher from '../../components/Mobileswitcher';


const Oxfo = () => {
    return (
        <>
            <Mobileswitcher />
            <div className="crop">
                {/* <img className="faceim" src={face} alt=""/> */}
            </div>
            <div className="ohero">
                <Template 
                    SidebarContent={
                        <>
                            <a href='#Section1'>Overview</a>
                            <a href='#Section2'>Objective</a>
                            <a href='#Section3'>Goals</a>
                            <a href='#Section4'>Strategy</a>
                            <a href='#Section5'>Research</a>
                            <a href='#Section6'>Define & Design</a>
                        </>
                    }
                    Title= "Oxfo"
                    // Subtitle= "A Web based application for the Oxfo blockchain."
                    Overview={
                        <>
                            For an independent Team to recognize that they are able to concede and solve a real life problem, is a call to start a platform where they'll be able to showcase their skills and expertise. Team Safewheel had an idea to expand their services to address some of these larger and diverse problem. Thus they started Oxfo, which would serve as a hub for clients to connect with the talented developer. Clients will be able to submit their project requirements and the team will work collaboratively to provide innovative solutions. The platform will also highlight the team's previous successful projects and testimonials from satisfied clients.
                        </>
                    }
                    Problem={
                        <>
                            <div className="heding">Requirent Analysis</div>
                            Now unlike any other project I've previously worked on, Oxfo is led to be a <strong>solution provider</strong>. Let's zoom into that for a bit. It's a platform that is run by the projects that clients want them to build. It can be as small as a generic media graphic, or as large as a giant scale E-commerce with inventory management. As there were a plethora of web based services associated with it, you bet the end users are going to be <strong>diverse</strong>. 
                            <br/><br/>
                            For that we would require a much more eye-pleasing and bouncy, <strong>colorful design with vibrant and contrasted elements</strong> that would help any user feel welcome.
                        </>
                    }

                    Objective={
                        <>
                            <ul style={{listStyleType: "disc", listStylePosition: "initial", color: "#0D483F", marginLeft: "-22px"}}>
                                <li><span style={{color: "black"}}>Create a name, brand and logo for the website.</span></li>
                                <li><span style={{color: "black"}}>Determine which are the most necessary pages for the starting of the showcase.</span></li>
                                <li><span style={{color: "black"}}>Create a way for users to communicate with clients.</span></li>
                                <li><span style={{color: "black"}}>Formulate a proper visualization of the companies services.</span></li>
                                <li><span style={{color: "black"}}>Introduce the Company, Team & philosophy to the end users.</span></li>
                            </ul>
                        </>
                    }
                    Goals={
                        <>
                            As seen in the requirements of the project, We can visualize and list our goals into the following points:<br/>
                            - To develop a web based application for the Oxfo blockchain.
                        </>
                    }
                    Details={
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 4 weeks<br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Safewheel LTD. <br/><br/>
                            <span style={{fontWeight: "500"}}>Tools:</span> Figma, Miro, Zeplin.
                        </>
                    }
                    body={
                        <>
                            <div className="screens heding">Design</div>
                            <div className="typo">
                                <img src={Oxfopage} alt=""/>
                            </div>
                        </>
                    }
                />
            </div>

        </>
    )
}

export default Oxfo;