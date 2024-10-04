import './About.css';
import img1 from '../../COMPONENTS/About/info-access.png'
import img2 from '../../COMPONENTS/About/custom-engage.png'
import img3 from '../../COMPONENTS/About/e-commerce.png'
import img4 from '../../COMPONENTS/About/analysis.png'

function About(props){
    return(
        <section className="About" id='About'>

            <div className="importance">
                <h1 > Importance  of  <span>   Website Development</span></h1>
            </div>

            <div className="info-access">
                <h2 className="info-access">Information Accessibility</h2>
                <p>
                    Information is easily available because of websites. Owning <br/>a website 
                    guarantees that people may access information <br/>for e-commerce, news, 
                    education, and entertainment at any <br/>time and from any location in the world. Websites have revo-<br/>lutionized way we access and interact with information. By 
                    <br/>providing 24/7 availability, global reach, and diverse <br/>functionalities</p>
                <p className='about1'>{props.about1}</p>
                <img className="img" src={img1} style={{ width: '400px', height: "250px" }} alt="info-access" />
            </div>

            <div className="custom-engage">
                <h2 className="custom-engage">Customer Engagement</h2>
                <p>
                    Websites provide a platform for businesses to interact with <br/>
                    customers. Through features like contact forms, live chat, <br/> blogs, and social media integration, businesses can engage <br/> with their audience, gather feedback, and build relationships.</p>
                <p className='about2'>{props.about2}</p>
                <img className="img" src={img2} style={{ width: '400px', height: "250px" }} alt="custom-engage" />
            </div>

            <div className="e-commerce">
                <h2 className="e-commerce">E-commerce</h2>
                <p>
                    Web development for e-commerce encompasses a range <br/> of activities focused on creating a seamless and secure sh-<br/>opping experience. 
                    This includes building functional interfa-<br/>ces, integrating secure payment systems, protecting custo-<br/>mer data, and 
                    continuously optimizing and maintaining <br/>the platform to meet evolving needs and threats.
                </p>        
                <p className='about3'>{props.about3}</p>
                <img className="img" src={img3} style={{ width: '400px', height: "250px" }} alt="e-commerce" />
            </div>

            <div className="analysis">
                <h2 className="analysis">Data Collection and Analysis</h2>
                <p>
                    Equipping websites with data collection and analysis tools <br/> 
                    valuable insights into user behavior, which is essential for <br/> 
                    making data-driven decisions. This process helps in improv-<br/>ing 
                    user experience, optimizing marketing efforts, enhancing<br/>
                    content, and ultimately driving better performance and gro-<br/>wth for the website.
                </p> 
                <p className='about4'>{props.about4}</p>
                <img className="img" src={img4} style={{ width: '400px', height: "250px" }} alt="analysis" />
            </div>

        </section>
    )
}
export default About;