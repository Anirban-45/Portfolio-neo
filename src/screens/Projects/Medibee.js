import React from 'react';
import '../../styles/Medibee.css';
import Template from './Template.js';
import uj from '../../assets/uj.jpg';
import cpt from '../../assets/cpt.jpg';
import Mhome from '../../assets/Mhome.jpg';
import Mcourse from '../../assets/Mcourse.jpg';
import Mlibrary from '../../assets/mlibrary.jpg';
import Mprofile from '../../assets/Mprofile.jpg';

function Medibee() {
    window.scrollTo(0,0);
    return(
        <>
            <div className="mhero">
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
                    Title= "Medibee"
                    Subtitle= "A course managing platform for medical students."
                    Overview= {<>Medibee.com.bd has already been a very successful website for the upcoming generations of doctors. They provide MBBS students with courses and exams to sharpen their skills. This project was handed to a few developers to make a mobile app for it. I was working there as a freelancer and was given the whole designing process of the first version of the app. As per the first version a few things were thought to be offered less in the app.</>}
                    Details=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> Freelance UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 3 months <br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Kernel Technologies <br/>
                        </>
                    }
                    Objective={
                        <>
                            <p>The objective was this project was pretty straightforward. To turn the Web application into an mobile app. Putting it in a compact form for easy to access use.</p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Problem</span>
                            <p>The problem peeps out just when thinking about the project. On a website, the course showcase is much easier. The advantage of browsing through courses reaching out to the creators and mentors is far too easy. But for a mobile app achieving this is far too difficult. The problem of live and recorded courses, separating them & upholding them to the users just as easily as the online web app would definitely be a tough job. Not to mention there was a support feature that would help the user text one of his issues with the app's multitude of courses and exams. And one of the officials would handle it by checking their databases. As a solo designer, I had very few resources to work through. The assets were hard to find and several designs had to be re-imagined in order to achieve better performance. So in theory achieving all of this was quite a daunting task.</p>
                        </>
                    }
                    Goals=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>- Translate the website into fragments.</span><br/>
                            <span style={{fontWeight: "500"}}>- find a solution to fit the courses in a mobile app</span> <br/>
                        </>
                    }
                    body=
                    {
                        <>
                            <div className="research">
                                <div className="research-title heding">Research</div>
                                <p style={{lineHeight: "25px"}}>In the case of research, this project was a bit hazy. As I was the only one working on it with access to very less resources, and my only client was the CEO of Kernel technologies himself. Therefore I needed to reach out to him every time I needed a proper understanding of the architecture. Aside from the high expectations, there was just something that would have been better to exclude from the mobile app. For example, the creators should only use the Website for uploading and creating courses and articles. Thus we have one less module to focus on. There were several small details imbued in this. I.e.</p>
                                <p style={{lineHeight: "25px"}}>- Consulting with the CEO I have figured out that separating the tests into three partitions would make the selection process easier for the user. <br/>
                                - The Events should be put on a separate page where all the events are listed and can be accessed by hyperlinks.<br/>
                                - The profile pages should also include statistics. Because this helps to keep track of the progressed and finished courses. <br/>
                                - The outline of the courses should be week based for a sense of continuity. <br/>
                                - The support page(Texts) should be only accessible after entering a valid course or test code. <br/>
                                <br/>
                                Now, these findings were gathered by following a few other apps in the marketplace and running up a few handheld ideas from other sorts of components. As the users were almost fully literate people the user journey will not confuse them as much. However, the said features will really help them to navigate the app according to the UI.</p>
                            </div>

                            <div className="des-def">
                                <div className="heding">Define</div>
                                <p style={{lineHeight: "25px"}}>For defining the whole work process I had to imagine a User journey. As It is a fairly large project defining the roadmap was necessary. The key module features are projected with the darker blue rectangles which then branches out to their smaller services. </p>
                                <div className="user-journey">
                                    <img src={uj} alt=""/>
                                </div>
                                <p style={{lineHeight: "25px"}}>The next important thing was to create the color theme and typography. Which was created in regard to the website itself. As the practice of medicine has a moderate use of white and red it is only suited to have red components on a white background. Regarding the accent color green has very calming hue and shifting it onto the bluish side we get a sort of Turqouise/Teal colour. This colour was put in contrast to the red flair. The component boxes were filled with a few lighter tones of close quarter colors. The Font was used mostly on its "Light" weight. Only the titles of the pages were of "Semi Bold" weight, "Medium" weight on a few highlighted texts.</p>
                                <div className="typo">
                                    <img src={cpt} alt=""/>
                                </div>
                                <div className="screens heding">Design</div>
                                <div className="typo">
                                    <img src={Mhome} alt=""/>
                                </div>
                                <div className="typo">
                                    <img src={Mcourse} alt=""/>
                                </div>
                                <div className="typo">
                                    <img src={Mlibrary} alt=""/>
                                </div>
                                <div className="typo">
                                    <img src={Mprofile} alt=""/>
                                </div>
                                <div className="proto">
                                    <a href="https://www.figma.com/proto/joDWKVW58uZxpYMBNEAatJ/Medibee?page-id=0%3A1&node-id=1%3A343&viewport=372%2C353%2C0.22&scaling=scale-down&starting-point-node-id=1%3A343">
                                        <button className="viewbtn">View Prototype</button>
                                    </a>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
        </>
    )
}

export default Medibee;
