import { useParams } from "react-router-dom";
import '../styles/IndividualPostPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleXmark, faBomb } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from "react-router-dom"


const IndividualPost = ({posts, setPosts, handleDelete}) => {
    const navigate = useNavigate();
    let {id} = useParams();
    let foundPost = posts.find((post) => post.id.toString() === id);

    if(!foundPost){
        return (
        <div className="not-found-div">
        <button onClick={() => navigate('/')} className="not-found-button">
            <FontAwesomeIcon icon={faBomb} />
            Post is not found
        </button>
        </div>
        )
    }

    return(
        <main className="post-container">
            <div className="post-header">
                <FontAwesomeIcon className="post-icon" icon={faEnvelope}/>
                <h2>{foundPost.title}</h2>
            </div>
            <h3 className="post-date-time">{foundPost.datetime}</h3>
            <p className="post-body-indiv">{foundPost.body}</p>

            <button type="button" className="delete-button" onClick={() => handleDelete(foundPost.id)}>
                <div className="delete-post-container">
                <FontAwesomeIcon className="delete-button-icon"icon={faCircleXmark} />
                <p>Delete Post</p>
                </div>
            </button>
            
        </main>
    )
}
export default IndividualPost;