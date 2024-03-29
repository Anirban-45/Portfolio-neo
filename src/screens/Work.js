import React from 'react';
import Pcard from '../components/Projectcard'
import Beditor from '../assets/Beditor Mockup.jpeg'
import Jatayat from '../assets/Jatayat Mockup.jpeg'
import SafeWheel from '../assets/Safewheel/Mockup.png'
import Oxfo from '../assets/Oxfo Mockup.jpg';
import Lily from '../assets/Lily/WorkFrame.png'
import Workicon from '../assets/planing.png'
import '../styles/Work.css'

function Work() {
    window.scrollTo(0,0);
    return(
        <div className="work-container">
        <div className="beginningtext">
            <div className='label'>
                My work projects.
                <span className="subtext"> These are a few projects I have worked on. If you look into them you gradually see my growth. Beginner or intermediate, I am quite proud of each and every one of them. </span>
            </div>
            <div className="iconexterior">
                <div className="iconholder">
                    <img src={Workicon} alt=""></img>
                </div>
            </div>
        </div>
            <Pcard
                image={Oxfo}
                title="Oxfo.tech"
                isNew={true}
                reverse={true}
                url="/work/oxfo"
                description="Oxfo is a remotwly worked full stack engineering platform who brings real world ideas into life."
            />
            <Pcard
                image={SafeWheel}
                title="SafeWheel Redesign"
                isNew={true}
                reverse={false}
                url="/work/safewheel"
                description="Safewheel is a healthcare E-commerce platform which cares about more than just products. It broadens to encompass a knowledge ecosystem and community "
            />
            <Pcard
                image={Lily}
                title="Lily Social Commerce"
                isNew={false}
                reverse={true}
                url="/work/lily"
                description="Lily Social Commerce is a social commerce platform for selling and buying Customizable designer Attires."
            />
            <Pcard
                image={Jatayat}
                title="Jatayat"
                isNew={false}
                reverse={false}
                url="/work/jatayat"
                description="Jatayat was a mobile application for any road activities and bus services related to Dhaka."
            />
            <Pcard
                image={Beditor}
                title="Beditor"
                isNew={false}
                reverse={true}
                url="/work/beditor"
                description="A user friendly minimal writting tool for casual text documents."
            />
        </div>
    )
}

export default Work;
