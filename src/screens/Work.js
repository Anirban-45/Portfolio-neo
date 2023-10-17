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
                url="/work/jatayat"
                description="Jatayat was a mobile application for any sort of bus services related to Dhaka."
            />
            <Pcard
                image={Medibee}
                title="Medibee"
                isNew={true}
                url="/work/medibee"
                description="Medibee is a course management platform for medical students."
            />
            <Pcard
                image={Beditor}
                title="Beditor"
                isNew={false}
                 url="/work/beditor"
                  description="A user friendly minimal writting tool for casual text documents."
              />
        </div>
    )
}

export default Work;
