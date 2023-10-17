import React from 'react';
import '../styles/About.css'
import face from '../assets/about-image.jpg'
import goal from '../assets/start-up.png'


function About() {
    window.scrollTo(0,0);
    return(
        <div className="about-body">
            <div className="about-top">
                <div className="top-text">
                    <div style={{fontSize: "22px", fontWeight: "500"}}>Hi there!</div>
                    <div style={{fontSize: "25px", fontWeight: "650", color: "#B83F3F"}}>My name is Anirban Tasfin Azad.</div>
                    <div>Prior to my UX journey, I was adorned into front-end Development. And working along there I found out, how important it is for contents to point and direct towards each other. <span style={{fontWeight: "700", color: "#2C8DD3"}}>It is the breath of the users' journey</span> and makes the whole experience that much more enjoyable.</div>
                    <div>Scouring through multiple media I came close to designing. Modeling my very own personalized products, and the ability to create fascinates me.</div>
                    <div style={{fontWeight: "700", color: "#2C8DD3"}}>The things I've done so far are a pursuit to relate to people and their ease and accessibility.</div>
                    <div>And as a designer I'm looking for just a group of people whom I can explore these Ideas.</div>
                </div>
                <img src={face} className="face" alt=""/>
            </div>
            <div className="mid-text">
                <div className="mid-par">
                    <div className="mid-title">
                        <img src={goal} alt=""/>
                        <span style={{fontSize: "28px", fontWeight: "600", color: "#fff"}}>What lead me here</span>
                    </div>
                    <div>
                        I have always been interested in artworks and structures. All the manmade and the god-given natural entities enthralled me. Colors intrigued me.
                        The geometric shapes, the way they are filled in with depths and textures, and the way each separate person arranges them; They bound to have a purpose. I have to say, finding order and patterns in certain places, ground-binding architectures, and interaction between people always made me think… <br/>
                        <strong>- How do these physical proportions come together?</strong> <br/>
                        <strong>- How do they form and attain order?</strong> <br/>
                        <strong>- And what makes one piece unfit for the ecosystem?</strong>
                    </div>
                    <div>
                        Later down the line, this curiosity led me to start writing. During my time at my university, I used to write articles or stories about people and inanimate objects.
                        Sketching up their roles into the environment they belong to. Traversing through this path I figured out a certain thing in me. The problems we see in our real life and however they are occurring,
                        do actually have a reason of significance. Each and every human has a reason to do or want something out of a situation.
                        And I for once wanted to get to the bottom of it. Learn to know about the problem’s architectures and affiliate me in a better way of achieving possible successful outcomes.
                    </div>
                    <div>
                        Now as I was doing my bachelor's in software engineering, I thought about a way to work through this within my career. During the pandemic, there were a few free times in my hand when I started to learn about
                        the <strong>User Experience culture</strong> and became very interested in it. Getting myself familiarized with <strong>human centric narratives</strong> soon has driven me to find answers and connections amongst the world around us.
                    </div>
                    <div>
                        In the end all I can say is that I am in love with UX. Because, I believe in the <strong>reasoning and the flow</strong> of structured entities.<strong> I believe, progress relies in acceptance and actions</strong>. And through different perspective we are sure to achieve better results.
                    </div>
                </div>
            </div>
            <div className="bottom-text">
                <div className="bottom-left">
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Experience</div>
                    <div className="e-title">Kernel Technologies</div>
                    <div className="ocu">FrontEnd Developer Intern</div>
                    <div>Feb 2021 - Jul 2021</div>
                    <div className="e-title-sp">Kernel Technologies (Freelance)</div>
                    <div className="ocu">Mobile UX design</div>
                    <div>Nov 2021</div>
                    <div className="e-title-sp">Innova Solutions</div>
                    <div className="ocu">UX/UI Designer</div>
                    <div>Jan 2022 - May 2022</div>
                    <div className="e-title-sp">Lily Social Commerce LTD.</div>
                    <div className="ocu">UX Designer</div>
                    <div>Jan 2023 - March 2023</div>
                    <div className="e-title-sp">Safewheel LTD.</div>
                    <div className="ocu">Product Designer</div>
                    <div>March 2023 - Now</div>
                </div>
                <div className="bottom-right">
                    <div className="edu" style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Education</div>
                    <div className="uni">Islamic university of Technology- <span>2018-2022</span></div>
                    <div style={{color: "#2C8DD3"}}>BSC. in Software Engineering</div>
                    <div className="college">Notre Dame College, Dhaka- <span>2015-2017</span></div>
                    <div style={{color: "#2C8DD3"}}>HSC, science</div>
                    <div className="school">Ideal School and College, Dhaka- <span>upto 2015</span></div>
                    <div style={{color: "#2C8DD3"}}>SSC, science</div>
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F", marginTop:"50px"}}>Skills</div>
                    <div className="design">Design</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Tools</span>- Figma, Whimsical, Miro, Zeplin, Lucid Chart, Aseprite</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Techniques</span>- User flows, Wireframing, Prototyping, Journey maps, Design systems, Gamification</div>
                    <div className="design" style={{marginTop:"20px"}}>Tech</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Languages</span>- C, C#, Python, JavaScript</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Frameworks & Services</span>- React, Firebase, MySQL, Mongo, AWS</div>

                </div>
            </div>
        </div>
    )
}

export default About;
