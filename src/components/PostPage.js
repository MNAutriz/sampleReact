import '../styles/PostPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/posts';

const PostPage = () => {
    const [newTitle, setnewTitle] = useState('');
    const [newDateTime, setnewDateTime] = useState('');
    const [newBody, setnewBody] = useState('');
    const {posts, setPosts} = useContext(DataContext);

    async function handleAddPost(e){
        e.preventDefault();
        const newId = String(posts.length + 1);
        const createdPost = { id: newId, title: newTitle, datetime: newDateTime, body: newBody };
        try{
          const response = await api.post('/posts', createdPost);
          setPosts([...posts, response.data]);
          console.log(response);
          setnewTitle('');
          setnewDateTime('');
          setnewBody('');
        } catch(err){
          console.log('Error: ', err.message);
        }
      } 

    return (
        <div className="post-creation-container">
            <div className='post-creation-div'>
                <FontAwesomeIcon className="create-post-icon" icon={faUserSecret} />
                <h2> Add New Post in the Application </h2>
                <FontAwesomeIcon className="create-post-icon" icon={faUserSecret} />
            </div>
            <div className='post-input-div'>
                <form className='new-post-form' onSubmit={(e) => e.preventDefault()}>
                    <input className='post-title-input' type='text' placeholder='Enter the new Title' required value={newTitle} onChange={(e) => setnewTitle(e.target.value)} />
                    <input className='post-date-input' type='text' placeholder='Enter the new Date and Time' required value={newDateTime} onChange={(e) => setnewDateTime(e.target.value)} />
                    <textarea className='post-body-input' type='text' placeholder='Enter the new Body' required value={newBody} onChange={(e) => setnewBody(e.target.value)} />
                    <button id="submit-new-post-button" className="submit-button-new" type="submit" onClick={(e) => handleAddPost(e)}>
                    <FontAwesomeIcon className="submit-post-icon" icon={faLaptopCode} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostPage;
