import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer(){
    return(
        <section  id="Contacts" >
            <footer>
                <div className="section__container">
                    <div className="footer__col">
                        <div className="footer__logo">
                        <a href="/Home">Website<span>Development</span></a>
                    </div>

                    <div className="footer_socials">
                        <ul>    
                            <li >            
                            <a href="/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                            <a href="/"><i className="ri-github-fill"></i></a>
                            <a href="/"><i className="ri-instagram-fill"></i></a>
                            </li>          
                        </ul>
                    </div>

                    <p className="section__description">
                    Thank you for your time.
                    </p>

                </div>
                        </div>
                <div className="footer__bar">
                Copyright © 2024 Mary Dhil. All rights reserved.
                </div>
            </footer>
  </section>
    )
}
export default Footer;