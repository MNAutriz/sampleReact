import PostCard from "./PostCard";
import '../styles/NewsFeed.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; 


const NewsFeed = ({posts}) => {
    return(
        <main className="newsfeed-container">
            {posts.length === 0 ? (
                <div className="empty-post-div">
                    <FontAwesomeIcon icon={faBomb} className="empty-post-icon" />
                    No Post Available
                </div>
            ) : (posts.map(post => (
            <PostCard key={posts.id} post={post}/>)
            ))}
        </main>
    )
}

export default NewsFeed;