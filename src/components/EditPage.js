import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/EditPage.css';

const EditPage = ({editBody, seteditBody, editDate, seteditDate, editTitle, seteditTitle, handleEdit}) => {
    const {id} = useParams();
    
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