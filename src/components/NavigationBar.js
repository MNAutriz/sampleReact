import { Link } from "react-router-dom";
import '../styles/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'; 

const NavigationBar = ({search, setSearch, handleSearching}) => {
    return (
        <nav className="navigation-container">
            <div className="nav-component">
                <form className="search-form" onSubmit={(e) => (e.preventDefault)}>
                    <input type="text" className="search-input" placeholder="Search Post" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="submit-button" type="submit" onClick={(e) => handleSearching(e)}>
                        <FontAwesomeIcon className="search-icon" icon={faFolderOpen} />
                    </button>
                </form>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/post">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
