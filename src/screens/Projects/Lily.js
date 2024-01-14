import React from 'react';
import Template from './Template';
import Mobileswitcher from '../../components/Mobileswitcher';
import '../../styles/Lily.css'
import landing from '../../assets/Lily/Landing Page.png';
import login from '../../assets/Lily/Sign Up Page.png';
import dashboard from '../../assets/Lily/Customer entry page.png'
import profile from '../../assets/Lily/Profile.png';
const Lily = () => {
    window.scrollTo(0,0);
    return (
        <>
            <Mobileswitcher/>
            <div className='Lilhero'>
                <Template
                    SidebarContent={
                        <>
                            <a href='#Section1'>Overview</a>
                            <a href='#Section2'>Problem</a>
                            <a href='#Section5'>Research</a>
                            <a href='#Section6'>Design</a>
                        </>
                    }
                    Title="Lily"
                    Overview={
                        <>
                            This was the first enterprise-level website I worked on. The proposed web application was not a generic one; it had a complex structure and a strict business model. The website offered a customized dress ordering service based on appointments. Here's how it worked: customers would book an appointment on the website, and then a designated personnel would visit their house to take specific orders. This person would also be responsible for delivering the order to the tailor. Once the tailor finished the product, the same person would deliver it or appoint a delivery person for the final delivery.
                        </>
                    }
                    Details={
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 1.5 months<br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Lily Social Commerce LTD. <br/><br/>
                            <span style={{fontWeight: "500"}}>Tools:</span> Figma, Miro, Zeplin.
                        </>
                    }
                    body={
                        <>
                            <div className="screens heding">Problems & Solution</div>
                            <p>
                                Now, these types of complex applications do tend to come with their fair share of problems, especially for a product that is still in its early stages and whose business logic is not yet solidified. Let's list a few issues here.
                            </p>
                            <ul>
                                <li>
                                    First, consider the hierarchy of the appointed personnel. They need to form a team that is mapped within a specific area. This is to avoid any conflicts with the higher-up's decisions. Additionally, workers have the ability to assign themselves to client requests, which may not be well-received by the clients.
                                </li>
                                <li>
                                    From the beginning, it is impossible to know how many dresses a customer will order. This can pose a significant challenge in terms of time management, as larger orders are often more complex or time-consuming. Therefore, it is important to consider implementing a time slot system to prevent customers from having their appointments postponed.
                                </li>
                                <li>
                                    The process is divided into several stages to manage its size effectively. It is crucial to inform the customer about the current stage of their product. However, the steps involved in communicating with the tailor and the manufacturing process can be complex and tangible. This complexity makes it challenging for the system to provide clear status updates to the customer.
                                </li>
                                <li>
                                    If any items in the orders need to be fixed and returned, a separate appointment is required. However, the existing process needed to be completely reworked because the system, based on the business logic, did not allow users to schedule an appointment unless there was an order in progress.
                                </li>
                            </ul>
                            <p>
                                These were a few issues that needed to be handled from the UX perspective. Now due to company policies and secrets all the issues could not be discussed over here.
                            </p>
                            <div className="screens heding">Research</div>
                            <p>
                                Two types of research were conducted within the timeframe. The first type was marketplace research, where we focused on other services and brainstormed ideas on how to differentiate our product from competitors.
                            </p>
                            <p>
                                The second type of research focused on users. Personas were created to identify pain points, and affinity maps were drawn based on feedback from users familiar with the manual process. However, due to time constraints and the project's scope, not all of these issues could be addressed, resulting in a slightly less user-friendly product. However, in the next iteration, more resources will be allocated to assess these issues and create an even more polished product.
                            </p>
                            <div className="screens heding">Design</div>
                            <p>
                                Following are a few design prototypes that were completely built by myself. I think these can give an idea of how the outlook of the product. As I’ve stated earlier, due to company policies and secrets the management design could not be attached.
                            </p>
                            <div className="typo">
                                <img src={landing} alt=""/>
                            </div>
                            <div className="typo">
                                <img src={login} alt=""/>
                            </div>
                            <div className="typo">
                                <img src={dashboard} alt=""/>
                            </div>
                            <div className="typo">
                                <img src={profile} alt=""/>
                            </div>
                        </>
                    }
                />
            </div>

        </>
    )
}

export default Lily