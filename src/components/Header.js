import '../styles/Header.css'
import logo from '../images/white-logo.png';

const Header = () => {
    return(
        <header className="header-container">
            <img src={logo} alt='application-logo' className='header-logo'/>
            ReactJS Blog Application
        </header>
    )
}

export default Header;