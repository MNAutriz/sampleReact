import { Link } from "react-router-dom";
import '../styles/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'; 
import { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";

const NavigationBar = () => { 
    const { posts, setPosts } = useContext(DataContext); 
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState(posts);

    useEffect(() => {
        if (search === '') {
          setSearchResult(posts);
        } else {
          const resultingSearchPost = posts.filter((post) => {
            return (post.title.toLowerCase().includes(search.toLowerCase())) ||  
                   (post.body.toLowerCase().includes(search.toLowerCase()));
          });
          setSearchResult(resultingSearchPost);
        }
      }, [search, posts]);


    function handleSearching(e) {
        e.preventDefault();
        const resultingSearchPost = posts.filter((post) => {
            return (
                post.title.toLowerCase().includes(search.toLowerCase()) || 
                post.body.toLowerCase().includes(search.toLowerCase())
            );
        });
        setSearchResult(resultingSearchPost);
        setPosts(searchResult);
    }

    return (
        <nav className="navigation-container">
            <div className="nav-component">
                <form className="search-form" onSubmit={handleSearching}>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search Post" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="submit-button" type="submit">
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
