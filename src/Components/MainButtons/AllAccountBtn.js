import React from 'react';
import { Link } from 'react-router-dom';

function AllAccountBtn(){
    return(
        <Link to="/TableForAllAccounts">
            <button type="button" className="btn btn-primary mr-3">All Accounts</button>
        </Link>
    );
}

export default AllAccountBtn;