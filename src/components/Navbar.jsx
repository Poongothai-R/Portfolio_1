import '../styles/navbar.css';
import Logo from '../assests/logo.png';

export default function Navbar() {
    return (
        <div className="navbar-main">
            <div className='navbar-content'>
               <a href='#home' rel="noreferrer"><img src={Logo} alt='logo' /></a>
                <ul>
                    <li><a href='#about' rel="noreferrer">About</a></li>
                    <li><a href='#projects' rel="noreferrer">Projects</a></li>
                    <li><a href='#tech' rel="noreferrer">Tech</a></li>
                    <li><a href='#contact' rel="noreferrer">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}