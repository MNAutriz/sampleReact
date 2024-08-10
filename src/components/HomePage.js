import '../styles/HomePage.css'
import NewsFeed from './Newsfeed';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const HomePage = () => {
    const {searchResult, error, loading} = useContext(DataContext);
    return(
        <main className="home-container">
            {loading && !error && ( <p className='loading-message'> Data is Still Loading... </p>)}
            {error && (<p className='error-message'> {error}</p>)} 
            {!loading && !error && (<NewsFeed posts={searchResult}/>)}  
        </main>
    )
}

export default HomePage;