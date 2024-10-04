import './Home.css';
import img1 from '../../COMPONENTS/Home/html5-lines.png'
import img2 from '../../COMPONENTS/Home/javascript-line.png'
import img3 from '../../COMPONENTS/Home/css3-line.png'
import img from '../../COMPONENTS/Home/header.png'

function Home(props) {
    return (
        <section id="Home">
           <div className="header__container">
                <div className="header__image">
                    <div className="header__image__card header__image__card-1" >
                        <span><i ></i></span>
                    HTML 
                        <img className="img" src={img1} alt="html"/>
                    </div>

                    <div className="header__image__card header__image__card-2 ">
                        <span><i ></i></span>
                    JavaScripts
                        <img className="img" src={img2} alt="js"/>
                    </div>

                    <div className="header__image__card header__image__card-3" >
                        <span><i ></i></span>
                    CSS 
                        <img className="img" src={img3} alt="css"/>
                    </div>
                    <img className="img" src={img} alt="header"/>
                </div>
                <div className="header__content">
                    <h1>LEARN NOW!<br />BUILD THE <span>WEB</span> YOU DREAM OF</h1>
                </div>
           </div>
        </section>
    );
}

export default Home;
