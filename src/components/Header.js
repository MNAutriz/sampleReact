import '../styles/Header.css'
import logo from '../images/white-logo.png';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSizing from '../hooks/useWindowSizing';

const Header = () => {
    const {width} = useWindowSizing();
    return(
        <header className="header-container">
            <img src={logo} alt='application-logo' className='header-logo'/>
            ReactJS Blog Application
            {width < 768 ? <FaMobileAlt className='device-logo'/> 
                : width < 992 ? <FaTabletAlt className='device-logo'/> 
                    : <FaLaptop className='device-logo'/>}
        </header>
    )
}

export default Header;