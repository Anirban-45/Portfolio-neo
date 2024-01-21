import React from 'react';
import Template from './Template';
import '../../styles/Safewheel.css';
import face from '../../assets/Safewheel/Frame 1.png';
import nb from '../../assets/Safewheel/problems.png';
import uj from '../../assets/Safewheel-uj.jpg';
// import persona1 from '../../assets/Safewheel/User Persona 1.png';
// import persona2 from '../../assets/Safewheel/User Persona 2.png';
import em from '../../assets/Safewheel/Empathy map.png';
import market from '../../assets/Safewheel/market.png';
import visual from "../../assets/Safewheel/Brand.png";
import molecules from "../../assets/Safewheel/Molecules.png";
import home from "../../assets/Safewheel/Home.png";
import login from "../../assets/Safewheel/Login.png";
import browse from "../../assets/Safewheel/Browse.png";
import checkout from "../../assets/Safewheel/Checkout.png";
import profile from "../../assets/Safewheel/Profile.png";
import history from "../../assets/Safewheel/History & wallet.png";
import blog from "../../assets/Safewheel/Blog.png";
import Mobileswitcher from '../../components/Mobileswitcher';

const Safewheel = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Mobileswitcher/>
            <div className="crop">
                <img className="faceim" src={face} alt=""/>
            </div>
            <div className="shero">
                <Template 
                    SidebarContent={
                        <>
                            <a href='#Section1'>Overview</a>
                            <a href='#Section2'>Objective</a>
                            <a href='#Section3'>Requirements</a>
                            <a href='#Section5'>Research</a>
                            <a href='#Section4'>Information architecture</a>
                            <a href='#Section6'>Design system</a>
                            <a href='#Section7'>Final design</a>
                        </>
                    }
                    Title="Safewheel Redesign" 
                    Subtitle="A wide range of healthcare products at your doorstep!"
                    Overview={
                        <>
                            Healthcare is a daunting task. For many, it's difficult to focus on medicene, physicians or even healthy lifestyles especially in Bangladesh. The complexities of the healthcare system, coupled with socio-economic factors, often create barriers to prioritizing one's well-being. But, healthcare is not just about medicine and treatment - it's also about information and connection.
                            <p>
                            That's what safewheel intends to create a super app that connects existing healthcare platforms under one roof, providing users with quick and easy access to the information and services. Safewheel should be caring and more humane.
                            </p>
                        </>
                    }
                    Details={
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 4 months + 3 months<br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Safewheel LTD. <br/><br/>
                            <span style={{fontWeight: "500"}}>Tools:</span> Figma, Miro, Zeplin, Invision, Jira.
                        </>
                    }
                    Objective={
                        <>
                            <span> - Recognize the requirements and create a consistent brand identity.</span>
                            <br/>
                            <span> - Find out scrappable and accessible content through ethnographic survey.</span>
                            <br/>
                            <span> - Develop a comprehensive design sustem.</span>
                            <br/>
                            <span> - Create a responsive website UI.</span>
                            <br/>
                            <span> - Design an concurrent easier to use app.</span>
                            <br/>
                            <span> - Test the artifacts and iterate on them.</span>
                            <div className='atom'>
                                <img src={nb} alt="User Journey"/>
                                <span>
                                    For the sake of atomicity, The application is focused on this case study. The website, other elements & their detailed descriptions will be available seperately.
                                </span>
                            </div>
                        </>
                    }
                    body={
                        <>
                            <div className="heding">Requirement Analysis</div>
                            <p>
                                When I first visited the SafeWheel headquarters, I was acquainted to the old site. In addition, the team presented several ideas for rebranding and enhancing the website. From our ethnographic survey, we came up with a st of user stories that would be helpful to at least start this revolutionary journey of developing a comprehensive one-stop healthcare application.
                            </p>
                            <a href="https://docs.google.com/document/d/1qstHXFH-4c-nd5j9ePVxUaFJsSbUtf-5cWOUD1V8PfQ/edit?usp=sharing">Safewheel SRS</a>
                            <p>
                                After completing this step, the process began to diverge into different routes. While juggling various responsibilities, I gathered ideas from different sources. The development team initiated decisions on the technologies to be employed. Ultimately, we concluded that the new website should be built from scratch.
                                <br/>
                                <br/>
                                There were <strong>Microservices</strong> set as the sites architecture. And concurrently, the Admin panel for the E-commerce platform was undergoing redevelopment.
                            </p>
                            <div className="heding">Research</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Defining & strategizing</span>
                            <p>
                                To begin with internally gathering elements and ideas, I started colaborating with different teams. Which led me to gather ideas which I promptly formulated into a storyboard.
                            </p>
                            <ul>
                                <li>The business team shared some notable brands, including a few highly successful foreign websites operating under the same motto. These platforms offered valuable insights into addressing challenges and transforming them into user-friendly solutions.</li>
                                <li>Collaborating with the development team provided me with insights into the information architecture. I identified the shortcomings of the previous website and actively participated in the schema design for the database. This involvement allowed me to take note of the data necessary to be portrayed through my design components.</li>
                                <li>The marketing team was previously working on running ads and generating customers. With the help of their assets, I could promptly create a brand identity and a design system for the new artifact.</li>
                                <li>Me alongside <strong>Tasin</strong> worked on the design itself. He was able to find us some design inspiration to start experimenting on visual design.</li>
                            </ul>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Focus groups</span>
                            <p>
                                These user stories gave us a good overview of what we needed to pull off. However, I was still concerned about designers or developers bias. which is why we created a few user personas and about 10 peoples were invited to the office. 
                            </p>

                            {/* <div className='typo'>
                                <img src={persona1} alt=""/>
                            </div>
                            <div className='typo'>
                                <img src={persona2} alt=""/>
                            </div> */}

                            <p>
                                We afterwards contacted several people to learn about what they liked or disliked about the previous website. We even approached random individuals to understand the difficulties they were facing with the current services. These specific steps allowed us to draw a few conclusions or outcomes.
                            </p>
                            <div className='Focus'>
                                <img className='empathy' src={em} alt=""/>
                                <div>
                                    <p><span className='title'>1. Accesibility:</span> Most of the users were confused how to navigate within the application.</p>
                                    <p><span className='title'>2. User Experience:</span> Users were frustrated with the lack of informative content and misleading UI elements.</p>
                                    <p><span className='title'>3. Shelving:</span> Users were concerned about how to interact and find the product they wanted.</p>
                                    <p><span className='title'>4. Real-life logistics:</span> A few users were able to complete the ordering process and were left wondering how would the order be delivered.</p>
                                    <p><span className='title'>5. Benefits:</span> Users were mentioning about what are the benefits they would be availing if they were to purchase products from the application.</p>
                                </div>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Marketplace Analysis</span>
                            <p>
                                I visited the websites that the business team had recommended and gained insights into various elements that could enhance user experience and streamline navigation. I made note of features that contribute to a more engaging user flow and can draw users to the application more effectively.
                            </p>
                            <p>Following is a list of competitors and their features that could be taken into account.</p>
                            <div className="typo">
                                <img src={market} alt=""/>
                            </div>

                            <div className='heding'>Information Architecthure</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Content Audit</span>
                            <p>
                                To grasp the nuances of the old site and its content, I conducted a content audit, noting all available information and features. Together, we made decisions on what to keep, what to discard, and how to create a more user-friendly & intuitive information architecture.
                            </p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Sitemap</span>
                            <p>
                                In developing the sitemap, careful consideration was given to the defined proto-personas along with their respective solutions to problems and motivations. This approach was aligned with the organization's objectives, ensuring a cohesive structure that caters to the identified user needs and aligns with the broader goals of the organization.
                            </p>
                            <div className="typo">
                                <img src={uj} alt=""/>
                            </div>
                            <div className='heding'>Design System</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Brand guidelines & visual style</span>
                            <p>
                                At the start of the brand guidelined was chaos. There were far too many options to choose from and marketing was all over the place and lacked cohesion. It was really important to have a concrete and clear brand identity. Addressing the ambiguity in colors, I implemented a 4-depth color system, carefully selecting primary and secondary colors to bring clarity and consistency to the brand.

                                <br/><br/>
                                Green was chosen for its association with safety and well-being, a fitting representation for the healthcare sector in the design. Blue, selected as a monochrome neutral color, provides accent and contrast to the background white. It symbolizes knowledge and reliability, enhancing the overall visual appeal.
                            </p>
                            <div className="typo">
                                <img src={visual} alt=""/>
                            </div>
                            <p>
                                In selecting a font for typography, I sought one commonly used in the healthcare sector. The Metropolis sans-serif font emerged as a versatile choice, communicating a mix of modernity and sophistication. Our design aimed for a powerful visual impact, and Metropolis delivered. To maintain cohesion with our developers' familiarity, we structured spacing using the Tailwind CSS spacing system.
                            </p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Molecules & components</span>
                            <p>
                                We talked about various design elements before crafting specific molecules or sub-components for different parts of the application. These pieces then came together to shape how users navigate through the system. To keep everything consistent, we stuck to the same typography and spacing system throughout the design process. 
                            </p>
                            <div className="typo">
                                <img src={molecules} alt=""/>
                            </div>
                            <div className='heding'>Final Design</div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Home</span>
                            <div className="typo">
                                <img src={home} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Authentication</span>
                            <div className="typo">
                                <img src={login} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Browsing</span>
                            <div className="typo">
                                <img src={browse} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Checkout</span>
                            <div className="typo">
                                <img src={checkout} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Profile Page</span>
                            <div className="typo">
                                <img src={profile} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>History & Wallet</span>
                            <div className="typo">
                                <img src={history} alt=""/>
                            </div>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Blog</span>
                            <div className="typo">
                                <img src={blog} alt=""/>
                            </div>
                        </>
                    }
                />   
            </div>
        </>
    )
}

export default Safewheel