import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/EditPage.css';
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useState } from "react";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
    const navigate = useNavigate();
    const [editBody, seteditBody] = useState('');
    const [editTitle, seteditTitle] = useState('');
    const [editDate, seteditDate] = useState('');
    const {posts, setPosts} = useContext(DataContext);

    const {id} = useParams();
    
    async function handleEdit(idToBeEdited){
        let foundPost = posts.find((post) => idToBeEdited.toString() === post.id.toString());
    
        if(foundPost){
          foundPost.title = editTitle;
          foundPost.datetime = editDate;
          foundPost.body = editBody;
        }
        
        try{
          const response = await api.put(`/posts/${idToBeEdited}`, foundPost);
          console.log(response);
          setPosts(posts);
          seteditBody('');
          seteditDate('');
          seteditTitle('');
          navigate('/');
        } catch(err){
          console.log('Error: ', err);
        }
      }





    return (
        <div className="edit-creation-container">
            <div className='edit-creation-div'>
                <FontAwesomeIcon className="create-edit-icon" icon={faUserSecret} />
                <h2> Edit the Selected Post </h2>
                <FontAwesomeIcon className="create-edit-icon" icon={faUserSecret} />
            </div>
            <div className='edit-input-div'>
                <form className='new-edit-form' onSubmit={(e) => e.preventDefault()}>
                    <input className='edit-title-input' type='text' placeholder='Enter the new Title' required value={editTitle} onChange={(e) => seteditTitle(e.target.value)} />
                    <input className='edit-date-input' type='text' placeholder='Enter the new Date and Time' required value={editDate} onChange={(e) => seteditDate(e.target.value)} />
                    <textarea className='edit-body-input' type='text' placeholder='Enter the new Body' required value={editBody} onChange={(e) => seteditBody(e.target.value)} />
                    <button id="submit-new-edit-button" className="submit-button-new" type="submit" onClick={(e) => handleEdit(id)}>
                    <FontAwesomeIcon className="submit-edit-icon" icon={faLaptopCode} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditPage;