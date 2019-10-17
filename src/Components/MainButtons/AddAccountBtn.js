import React from 'react';
import { Link } from 'react-router-dom';

function AddAccountBtn(){
    return(
        <Link to="/FormAddNewAccount">
            <button type="button" className="btn btn-success mr-3">Add new Accounts</button>
        </Link>
    );
}

export default AddAccountBtn;