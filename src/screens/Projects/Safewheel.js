import React from 'react';
import Template from './Template';
import '../../styles/Safewheel.css';
import Mobileswitcher from '../../components/Mobileswitcher';

const Safewheel = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Mobileswitcher/>
            <Template 
                SidebarContent={
                    <>
                        <a href='#Section1'>Overview</a>
                        <a href='#Section2'>Problem</a>
                        <a href='#Section5'>Research</a>
                        <a href='#Section6'>Design</a>
                    </>
                }
                Title="Safewheel Redesign" 
                Subtitle="A wide range of healthcare products at your doorstep!"
                Overview={
                    <>

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
            />   
        </>
    )
}

export default Safewheel