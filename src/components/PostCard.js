import '../styles/PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    function handleCardTitle(title){
        let length = title.length;
        if(length > 30){
            return `${title.slice(0, 30)}...`
        }
        return title;
    }

    function handleCardBody(body){
        let length = body.length;
        if(length > 180) {
            return `${body.slice(0, 180)}...`;
        }
        return body;
    }

    return(
        <div className="post-card-container">
            <div className='post-card-header'>
            <Link to={`/post/${post.id}`}>  
                 <span className='relocate-span'>
                 <FontAwesomeIcon className="post-icon"icon={faFolderOpen} />
                 <h2>{handleCardTitle(post.title)}</h2>
                 </span>
            </Link>
            </div>
            <h3>{post.datetime}</h3>
            <p className='post-body'>{handleCardBody(post.body)}</p>
        </div>
    )
}

export default PostCard;