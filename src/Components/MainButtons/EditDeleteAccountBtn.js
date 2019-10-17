import React from 'react';
import { Link } from 'react-router-dom';

function EditDeleteAccountBtn(){
    return(
        <Link to="/TableForEditDeleteAccount">
            <button type="button" className="btn btn-danger">Edit / Delete Account</button>
        </Link>
    );
}

export default EditDeleteAccountBtn;