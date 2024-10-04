import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="nav__header">
                <div className="nav__logo">
                <a href="#Home">Website<span>Development</span>.</a>
                </div>
              
            </div>
            <ul className="nav__links" >
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contacts">Contacts</a></li>
            </ul>
            <div className="nav__btns">
                <button className="btn sign__up">Sign Up</button>
                <button className="btn sign__in">Sign In</button>
            </div>
    </nav>
    )
}
export default NavBar;
