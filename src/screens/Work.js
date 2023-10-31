import React from 'react';
import Pcard from '../components/Projectcard'
import Beditor from '../assets/Beditor Mockup.jpeg'
import Jatayat from '../assets/Jatayat Mockup.jpeg'
import Medibee from '../assets/Medibee Mockup.jpeg'
import '../styles/Work.css'

function Work() {
    window.scrollTo(0,0);
    return(
        <div className="work-container">
        <div className="beginningtext">
            Following are a few projects That I have worked on!
        </div>
            <Pcard
                image={Jatayat}
                title="Jatayat"
                isNew={true}
                reverse={true}
                url="/work/jatayat"
                description="Jatayat was a mobile application for any road activities and bus services related to Dhaka."
            />
            <Pcard
                image={Medibee}
                title="Medibee"
                isNew={true}
                reverse={false}
                url="/work/medibee"
                description="Medibee is a course management platform for medical students of Bangladesh. It provides curated courses and outlines to help one in their MBBS"
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
