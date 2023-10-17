import React, { useState, useEffect } from 'react';
import '../../styles/Jatayat.css'
import { Route } from 'react-router-dom';
import face from '../../assets/Jatayat face.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import wireframe from '../../assets/wireframe1.png';
import proto1 from '../../assets/Jatayat proto1.png';
import proto2 from '../../assets/Jatayat proto2.png';
import persona from '../../assets/Persona.png';
import Template from './Template.js';

function Jatayat() {
    window.scrollTo(0,0);

    const overviewScroll = () => {
        window.scrollTo(0, 1000);
    }

    return(
        <div>
            <img src={face} className="faceimj" alt=""/>
            <div className="jhero">
                <Template
                    SidebarContent={
                        <>
                            <a href='#Section1'>Overview</a>
                            <a href='#Section2'>Problem</a>
                            <a href='#Section3'>Objective</a>
                            <a href='#Section4'>Goals</a>
                            <a href='#Section5'>Research</a>
                            <a href='#Section6'>Define</a>
                            <a href='#Section7'>Design</a>
                        </>
                    }
                    Overview= {<>The Dhaka traffic has always been a major setback for the people residing around here. We have always been in this notion of being uncertain about when we get out of the home. "When shall we reach our destination"? However, The Jatayat app makes it easier for the users. It provides every single piece of information about the Dhaka roads in real-time traffic. <br/>This was A redesign of the old Jatayat app model. <span style={{fontWeight: "700"}}>Adding new features and improving the experience in the new versions.</span></>}
                    Details=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 2 months <br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Innova Solutions <br/><br/>
                            <span style={{fontWeight: "500"}}>Tools:</span> Figma, Whimsical, Zeplin
                        </>
                    }
                    addTitle="Problem"
                    Problem=
                    {
                        <> There are estimated to be millions of people using public transport in Dhaka every day. While it is accessible, there lies a multitude of misinformation and uncertainty.<br/>
                        - The traffic makes it unbearable for people to estimate and manage time. <br/>
                        - The timing and sources of transport are often unknown to the people.  <br/>
                        - In the end, the fair system redesignation has made people confused about how much they should be charged for their rides. <br/><br/>

                        Jatayat tries to merge these into a few solutions to provide a thorough guide to the users. By tracking the schedules of the transports and implementing a user-based continuous traffic update it tries to give details information and reasons for congestion. As well as the map will always be accessible to check routes and pathways of public transport and how much time it will take. Finally, a fare calculator could be integrated into the system to properly determine the fare according to the distance and rides.
                        </>
                    }
                    Objective={
                        <>
                            This project was handed to me while in the v1.4 update. Ans I was supposed to redesign the application. As of then, no User Experience designer was not available, and most of the UI parts were handled by the developers and product managers themselves. But for the latest version, they opted to put in a few efforts in actually getting proper market research and redesigning the UI as a whole.
                        </>
                    }
                    Goals=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>- Follow a color theme according to the old version and sharpen it.</span><br/>
                            <span style={{fontWeight: "500"}}>- Research about the targeted customers and their pain points.</span> <br/>
                            <span style={{fontWeight: "500"}}>- Assimilate the new features and accomodate them with the sponsors.</span><br/>
                            <span style={{fontWeight: "500"}}>- polish the users personal accounts to attain maximus engagements</span>
                        </>
                    }
                    body={
                        <>
                            <div className="research" >
                                <div className="research-title heding">Research</div>
                                <p style={{lineHeight: "25px"}}>Now for a widespread application, the engagement of the users would be a vital part of the research. So the product team went to take a small user interview. But firstly, we've thought of creating user personas to rule out a user's basic concerns. From the many personas, we have created something that stood out. That a newsfeed for the people is very necessary. As the support that people require in road-based issues in regularity can be solved the best by other people. And with help from a few or many intermediates, this can stand out to be a social reporting system that uses the users' curiosity as a tool to provide ease.</p>
                                <div className="per">
                                    <img src={persona} alt=""/>
                                    <span style={{color: "grey",  fontSize: "12px", marginTop: "5px"}}>Example of a user persona</span>
                                </div>
                                <span style={{fontWeight: "500",  fontSize: "20px"}}>Marketplace analysis</span>
                                <p style={{lineHeight: "25px"}}>Overviewing the app it seems the users get a bit confused about the technical features. As most of the apps on the market show a map and have a certain property to utilize the map as the center of their features. However, the central map hides a few of the features that the users were supposed to access. And for that, they were not able to harness the full potential and often get lost between the pages of the application. And thus this needed a revamp. <br/> Going through the documentation we see a severe lack of information i.e. the number of bus stops, the coordinates of bus stops, bus details, route convergences, etc. These pieces of information were very necessary to be input to find a proper way to display them in the application. the fare calculator was also not working properly because of the lack of provided locations. So a handful of people were designated to physically and digitally gather this information and store it in a database. <br/><br/> The latter issue to be addressed was the posts. We had to decide a way to put the posts in such a way that it is visible to the average users but also are not distracting to the eye so that the main wants are not unattained. The create post section was thought to be kept short due to the lack of time a user might have in their way of commute. And the rest of the details would be extracted either from the interactions or the various user profiles.</p>
                            </div>
                            <div className="inter" id='Section6'>
                                <div className="research-title heding">User interview findings</div>
                                <div className="finding">
                                    <div className="finding-1">
                                        <span style={{fontWeight: "500",  fontSize: "20px"}}>Live updates</span>
                                        <p>Even though the map was helpful the users were struggling with the individual reasons why the roads were congested. They wanted separate information to actually verify the estimations.</p>
                                    </div>
                                    <div className="finding-1">
                                        <span style={{fontWeight: "500",  fontSize: "20px"}}>Visibility issue</span>
                                        <p>Most of the options were in the side menus and thus were not automatically visible to the tab of the app. Very many people notified that they could not find the fare calculator function.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="des-def">
                                <div className="heding">Define</div>
                                In this case, we created the new wireframes. Firstly, I decided to provide larger Icons in front of the apps to show off the features and then incorporate the map with the location insert mechanics. We thought about creating a feed feature to designate as the post viewer page.
                                <div className="wireframe" >
                                    <img className="w1" src={wireframe} alt="" />
                                    <div id='Section7'></div>
                                </div>
                                <div className="heding">Design</div>
                                <span style={{fontWeight: "500",  fontSize: "20px"}}>Prototype</span>
                                <img className="p1" src={proto1} alt=""/>
                                <img className="p2" src={proto2} alt=""/>
                                <span style={{fontWeight: "500",  fontSize: "20px"}}>Sticker sheet</span>
                                <div className="sticker-board">
                                    <img className="s1" src={sticker1} alt=""/>
                                    <img className="s2" src={sticker2} alt=""/>
                                </div>
                                <div className="proto">
                                    <a href="https://www.figma.com/proto/FzfzIvRAodwexKpll5hfEf/Vehicle-accessibility-project?page-id=0%3A1&node-id=1%3A128&viewport=827%2C280%2C0.34&scaling=scale-down">
                                        <button className="viewbtn">View Prototype</button>
                                    </a>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
            
        </div>
    )
}

export default Jatayat;
