import React from 'react';
import '../../styles/Beditor.css';
import Template from './Template.js';
import face from '../../assets/Beditor face.png';
import set from '../../assets/settings.png';
import b1 from '../../assets/Beditor 1.png';
import b2 from '../../assets/Beditor 2.png';

function Beditor() {
    window.scrollTo(0,0);
    return(
        <>
            <div className="crop">
                <img className="faceim" src={face} alt=""/>
            </div>
            <div className="bhero">
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
                    Title= "Beditor"
                    Subtitle= "A Text editor for casual writing exercise."
                    Overview= {<>Writings have been constructed and valued, as it is a way of formulating data in numerous ways. As a growing passion for constructive writing and coming from a Code oriented background, this was my first personal project to build a proper consistent text editor. <span style={{fontWeight: "700"}}>This was focused on casual writing and journal-making capability.</span></>}
                    Details=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 3 weeks
                        </>
                     }
                    Objective=
                    {
                        <>The objective of this project was to create a seamless experience for writing. Providing various modes and pointing out the outlines while giving an easy way to format the text will be the main objective of this application.<br/><br/>
                          Now coming into the genre of casual writing software, most of the users have been known to choose a particular software over "Microsoft Word" is for better writability, speed, and ease of access. Yet due to most of the writing tool's bulk and excessive settings somehow people get overwhelmed. In this case, the basic wanted outcome is to create a minimalistic app while keeping a pretty handy level of features and usage.
                        </>
                    }
                    Goals=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>- Achieve the most ease and accessability.</span><br/>
                            <span style={{fontWeight: "500"}}>- Acurately provide the document details and formatting support.</span><br/>
                            <span style={{fontWeight: "500"}}>- A polished easy to understand UI from a markdown view.</span>
                        </>
                    }
                    body={
                        <>
                            <div className="solve">
                                <div className="solve-title">
                                    <img src={set} alt=""/>
                                    <span>Strategies for solving</span>
                                </div>
                                <p style={{lineHeight: "30px"}}>
                                    So, for opting into this project I needed to understand what are the core things that people want to prioritize in their writing tools. Firstly a small audit is needed to check out what the other tools and platforms offer. A few articles in medium would also help us to catch a few customer personas. Then After listing the functionalities we can incorporate them into our designs. <br/><br/>
                                    We need to be intuitive about the interfaces and how the functionalities interact and follow each other. Finally, design the components to format in the prototype.
                                </p>
                            </div>
                            <div className="proc">
                                <div className="research">
                                    <div className="research-title heding">Research</div>
                                    <p style={{lineHeight: "25px"}}>As per the research plans, I first audited the other text editors' features. So, I sought 6 to 8 applications and listed out the most make-or-break features that they offered with respect to the customers and their documents. The most important feature that was provided by them were, <br/>- Outlines <br/>- Docment details <br/>- Markdown support <br/>- Hemmingway mode </p>
                                    <span style={{fontWeight: "500",  fontSize: "20px"}}>Marketplace analysis</span>
                                    <p style={{lineHeight: "25px"}}>The next thing is what the marketplace users require and what they need. In these sorts of writing tools, the users want a seamless experience in editing documents. This means any sort of clutter on the screen is going to be an issue. Therefore a mode of less Ui would be necessary. Secondly, a mode of statistics in the document is always very helpful for the user. Breaking the document into readability and grammatical correctness to give a full analysis of the text should be a really good plus point. Different language support is absolutely necessary but coding in the grammatical analysis for each and every language would be a very hard-to-achieve task. <br/> Alongside all of this, the highlight and external link support are very useful as users mention. The highlights could be incorporated in the outline to provide a thorough fragmentation of the document. In the end, the folder structure of the document must be upfront to the user as he/she can edit multiple documents side by side concurrently.</p>
                                </div>
                                <div className="des-def">
                                    <div className="heding">Define and Design</div>
                                    <p>Based on the solution and processes I have the application architecture in mind. And it can be defined as the following:</p>
                                    <table>
                                        <tr>
                                            <td>Text editor space</td>
                                            <td>The main editor will be visible as soon as the application is open</td>
                                        </tr>
                                        <tr>
                                            <td>Files</td>
                                            <td>Accessisng files can be done through a streching sidebar panel</td>
                                        </tr>
                                        <tr>
                                            <td>Outlines</td>
                                            <td>The outlines can be tabbed in with the Files</td>
                                        </tr>
                                        <tr>
                                            <td>Document statistics</td>
                                            <td>Document stats can be accessed through a button on the bottom right corner</td>
                                        </tr>
                                    </table>
                                    <p>Firstly lets look at the main view of the editor in the prototype.</p>
                                    <img src={b1} alt=""/>
                                    <p>Then let's focus onto the sidebar as it is a very crucial part of the application.</p>
                                    <img src={b2} alt=""/>
                                    <div className="proto">
                                        <a href="https://www.figma.com/proto/ujylx2uBvwiWrJdlgah2Vw/BEditor?page-id=0%3A1&node-id=2%3A2&viewport=458%2C337%2C0.29&scaling=scale-down&starting-point-node-id=2%3A2">
                                            <button className="viewbtn">View Prototype</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
            
        </>
    )
}

export default Beditor;
