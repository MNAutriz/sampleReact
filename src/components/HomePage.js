import '../styles/HomePage.css'
import NewsFeed from './Newsfeed';

const HomePage = ({posts}) => {
    return(
        <main className="home-container">
            <NewsFeed posts={posts}/>
        </main>
    )
}

export default HomePage;