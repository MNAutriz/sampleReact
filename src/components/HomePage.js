import '../styles/HomePage.css'
import NewsFeed from './Newsfeed';

const HomePage = ({posts, data, loading, error}) => {
    return(
        <main className="home-container">
            {loading && !error && ( <p className='loading-message'> Data is Still Loading... </p>)}
            {error && (<p className='error-message'> {error}</p>)} 
            {!loading && !error && (<NewsFeed posts={posts}/>)}  
        </main>
    )
}

export default HomePage;