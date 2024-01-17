import React from 'react';
import Template from './Template';
import '../../styles/Oxfo.css';
import Oxfopage from '../../assets/Oxfo/Oxfo.png';
import Oxfocolor from '../../assets/Oxfo/Color.png';
import lld from '../../assets/Oxfo/LLD.png'
import Bmc from '../../assets/Oxfo/Business Model Canvas.jpg';
import Marketing from '../../assets/Oxfo/Marketing.png';
import Icon1 from '../../assets/Oxfo/conversation.png';
import Icon2 from '../../assets/Oxfo/team-building.png';
import Icon3 from '../../assets/Oxfo/consultation.png';
import Icon4 from '../../assets/Oxfo/quality-assurance.png';
import journey from '../../assets/Oxfo/Journey Map.png';
import Mobileswitcher from '../../components/Mobileswitcher';
import cl1 from '../../assets/Oxfo/Sticker board.png';
import cl2 from '../../assets/Oxfo/component library.png';

const Oxfo = () => {
    window.scrollTo(0,0);
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
                            <a href='#Section2'>Requirements</a>
                            <a href='#Section3'>Goals</a>
                            <a href='#Section5'>Research</a>
                            <a href='#Section4'>Branding</a>
                            <a href='#Section6'>Design</a>
                        </>
                    }
                    Title= "Oxfo.tech"
                    Subtitle= "Your Full-stack engineering platform."
                    Overview={
                        <>
                            For an independent Team to recognize that they are able to concede and solve a real life problem, is a call to start a platform where they'll be able to showcase their skills and expertise. Team Safewheel had an idea to expand their services to address some of these larger and diverse problem. Thus they started Oxfo, which would serve as a hub for clients to connect with the talented developer. Clients will be able to submit their project requirements and the team will work collaboratively to provide innovative solutions. The platform will also highlight the team's previous successful projects and testimonials from satisfied clients.
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
                    Problem={
                        <>
                            <div className="heding">Requirment Analysis</div>
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
                            - To develop a web based application for Oxfo.<br/>
                            - To create a proper visualization of the company's services.<br/>
                            - To introduce the Company, Team & philosophy to the end users.
                        </>
                    }
                    body={
                        <>
                            <div className="screens heding">Research</div>
                            <p>
                                The research process began even before Oxfo was conceptualized. With an in-house team already in place at Safewheel, our founders always aspired to be solution providers. With the perspective of true entrepreneurs, they saw this amazing opportunity and couldn't let it slip away. As for this new project, I was fortunate enough to be selected as the Deputy Manager, overseeing the entire process from start to finish.
                            </p>
                            <p>
                                Now, the first thing was to assess what the team was capable of and determine the types of services we could provide. To do this, I needed to create a Business Model Canvas. After several meetings, collaborations, and consultations with each team member, I ended up with the following canvas.
                            </p>
                            <div className="typo">
                                <img src={Bmc} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Marketplace Analysis</span>
                            <p>
                                I have studied nearly 17 different solution provider platforms, taking notes from each of them and auditing them in my personal archive. I have compiled a documented list that is available at the following link.
                            </p>
                            <a href="https://docs.google.com/document/d/1207DCD54qWHMyw7vtbSK_2QEV6T1_aM3GCITXnPdQ8E/edit?usp=sharing">Oxfo Marketplace Audit</a>
                            <p>
                                Based on my research, I have identified a few necessary pointers. These have helped me solidify some essential components that could be included in the website.
                            </p>
                            <div className='findings'>
                                <div style={{display: "flex", gap: "20px"}}>
                                    <div className="finding-card">
                                        <img src={Icon1} alt=""/>
                                        <span className='finding-title'>Communication channel</span>
                                        <span>Clients prefer a structured form over traditional emails for easier communication. This allows streamlined data collection, efficiently organized in a spreadsheet for better management.</span>
                                    </div>
                                    <div className="finding-card">
                                        <img src={Icon2} alt=""/>
                                        <span className='finding-title'>Audience catered plans</span>
                                        <span>People fear customized and improvised pricing due to its potential for being perceived as high without understanding specific requirements. Predefined pricing often lead to reluctance before assessing individual needs.</span>
                                    </div>
                                </div>
                                <div style={{display: "flex", gap: "20px"}}>
                                    <div className="finding-card">
                                        <img src={Icon3} alt=""/>
                                        <span className='finding-title'>Lack of consultancy</span>
                                        <span>Individuals with non-technical backgrounds find it challenging to embark on their entrepreneurial journey in the business world. Their ideas are eventually scrapped.</span>
                                    </div>
                                    <div className="finding-card">
                                        <img src={Icon4} alt=""/>
                                        <span className='finding-title'>Technological Assurance</span>
                                        <span>When there aren't clear examples of a service in the market, people tend to doubt the providers. Beginners might feel intimidated by the size of their ideas and the execution process they think is required.</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="heding">The Making of Oxfo</div>
                            <p>
                                From the data I collected, I created an ideal user flow as how I imagined the website to pan out and what my desired user experience would entail.This evolved into an experience map, illustrating the user's journey and emotions at every step on the site.
                            </p>
                            <div className="typo2">
                                <img src={journey} alt=""/>
                            </div>
                            <p>
                                From here, I could decide what actions and features were crucial and beneficial, and select a list of pages around these conclusions My goal was to craft a seamless experience for my target users by prioritizing simplicity while maintaining a balance between visualization and clarity.
                            </p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Marketing plan</span>
                            <p>
                                I was also lucky enough to plan the marketing strategy for Oxfo. Scouring through LinkedIn I've came to the conclution that people require informative posts and blogs to be convinced in a platform. 
                            </p>
                            <p>
                                This insight prompted me to collaborate with Rafiq Islam and Ariful Islam Muhin on several blogs. Following this, we created numerous flyers and informative posters.
                            </p>
                            <div className="typo2">
                                <img src={Marketing} alt=""/>
                            </div>


                            <div className="heding">Branding</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Research</span>
                            <p>
                                As I mentioned before, the Oxfo team will be working with a diverse group of people. Therefore, it was crucial to make the branding less intimidating. During my research, I found that many agencies and solution providers either make their websites overly complicated with large, flashy fonts and complex animations, or they make them too simple and lacking in information.
                            </p>
                            <p>
                                For this reason, I wanted to create a website that provides proper documentation to assure clients of our services. I believe that using larger texts and whitespace will give the website a minimalistic feel.<br/><br/>
                                Additionally, I wanted to select a font that is not commonly used on other websites, but still serves as an excellent replacement for technology-focused websites. This led me to consider a Sans-serif font.
                            </p>
                            <p>
                                In addition to establishing our identity, I believe it is important for users to see examples of the team's previous work. This will help them feel confident that they have chosen the right team to bring their ideas to life.
                            </p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Process</span>
                            <p>
                                So, taking a note from the research, I have chosen a color palette that is easy on the eyes and provides contrast to make it eye-catching. For the background, I've selected a light theme with white as the background color. 
                                <br/><br/>
                                To add shades to the background, I've chosen the main color as Bleached Aqua, which gives a cool and light effect when designing the components. The color Autumn Robin is used to highlight important text and CTA buttons, as it is vibrant and exciting. Finally, a yellow Mustard color is used as an accent for its warmth, friendliness, and optimism.
                            </p>
                            <p>
                                For texts and contents, a dark Eclipse color and its shades will work wonders. The peacock color is included to contrast the beautifully accented Mustard.
                            </p>
                            <p>
                                When it comes to the logo, I had several ideas in mind. Eventually, I collaborated with my colleague Ema, who provided me with a few sketches. After tinkering with the "O" of Oxfo, we realized it was our best option. The brand name generated a lot of hype, and the "O" is the most significant part of it. For a clean design, we opted for a simple gradient. Although the company is a tech company, users have noted that the snipped "O" logo resembles a doorway or a hint of a lightbulb. Aesthetically, I aimed to create a brand that stands out from the more technical tool-facing marketplace.
                            </p>
                            <p>
                                The rest of the logo consists of other letters, with the Oxfo portion highlighted.
                            </p>
                            <div className="typo2">
                                <img src={Oxfocolor} alt=""/>
                            </div>
                            <div className="screens heding">Design</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Low level sketches</span>
                            <p>
                                Before getting the design solution I did brainstorm on the problem, understand clients pain points, and how I might solve those problems. I got down to pen and paper, sketching quick low fidelity wireframes.
                            </p>
                            <div className="typo2">
                                <img src={lld} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Component library</span>
                            <div className="typo2">
                                <img src={cl1} alt=""/>
                            </div>
                            <div className="typo2">
                                <img src={cl2} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Responsive UI</span>
                            <p>
                                To show how the website and webapp would behave on various devices, I made responsive designs for the homepage and few important other pages.
                            </p>
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