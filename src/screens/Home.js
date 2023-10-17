import React from 'react';
import '../styles/Home.css';
import profile from '../assets/Photo.jpeg';
import research from '../assets/research.png';
import product from '../assets/growth.png';
import development from '../assets/development.png';
import Card from '../components/Card';
import Jatayat from '../assets/Jatayat ag.jpg';
import Medibee from '../assets/Medibee ag.jpg';
import {useNavigate} from 'react-router-dom';

function Home() {
    window.scrollTo(0,0);
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="container-front">
                <div className="container-mobile">
                    <img src={profile} alt="" className="mb-image" />
                    <p className="main-pg-sm">
                        Hello, I am Anirban.<br/>
                        And I work as a <span className="colored-text-1">UI/UX</span> and <span className="colored-text-2">Product designer</span>.
                    </p>
                </div>
                <div className="fancy-shape">
                    <div className="lineshape"></div>
                    <div className="circleshape"></div>
                </div>
                <div className="container-text">
                    <p className="main-pg">
                        Hello, I am Anirban.<br/>
                        And I work as a <span className="colored-text-1">UI/UX</span> and <span className="colored-text-2">Product designer</span>.
                    </p>

                    <p className="second-pg-1">
                        To cover my full bases,
                    </p>
                    <p className="second-pg-2">
                        I also work as a <span className="colored-text-3">Front-end developer</span> and a <span className="colored-text-4">Creative content writer</span>.
                    </p>
                    <p className="desc-pg-1">
                        The way I have seen design that it's a very subjective and customized process.
                    </p>
                    <p className="desc-pg-2">
                        One must know the crowd and blend into them to create a near perfect
                        and delightful design solution for them. And being an empath I see myself
                        striving for just that.<br/>
                        <span className="colored-text-5"> As I do so, you will also find me hanging around outdoors or nearby any
                        exhibitions, concerts or literary scenes.</span>
                    </p>
                </div>
                <img src={profile} alt=""/>
            </div>
            <div className="container-bt" style={{maxWidth: "1280px", margin: "auto"}}>
                <div className="layer-text">My line of work</div>
                <div className="container-card">
                    <Card image={research} title="Strategy Research" description="Understand the market, define the audience, and ideate potential solutions."/>
                    <Card image={product} title="Product Design" description="Develop an appropriate prototype according to The users wants and needs."/>
                    <Card image={development} title="Front-end Development " description="Put the prototype into a web format and create front end components to be attached with a data source."/>
                </div>
                <div className="work-layer">
                    <div className="layer-text">Recent works</div>
                    <input className='browse' type="submit" onClick={() => navigate("/work")} value="Browse all projects" />
                </div>
                <div className="projs">
                    <div className="view-1" onClick={() => navigate("/work/jatayat")}>
                        <img src={Jatayat} alt=""/>
                        <p>View project</p>
                        <div className="fancy-shape-bt">
                            <div className="fancy-shape-bt-1">
                                <div className="circleshape"></div>
                                <div className="lineshape"></div>
                            </div>
                            <div className="fancy-shape-bt-2">
                                <div className="circleshape"></div>
                                <div className="lineshape"></div>
                                <div className="circleshape"></div>
                            </div>
                        </div>
                    </div>
                    <div className="view-2" onClick={() => navigate("/work/medibee")}>
                        <p>View project</p>
                        <img src={Medibee} alt=""/>
                        <div className="fancy-shape-bt">
                            <div className="fancy-shape-bt-2">
                                <div className="circleshape"></div>
                                <div className="lineshape"></div>
                                <div className="circleshape"></div>
                            </div>
                            <div className="fancy-shape-bt-1">
                                <div className="lineshape"></div>
                                <div className="circleshape"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
