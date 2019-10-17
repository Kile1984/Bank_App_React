import React from 'react';
import AllAccountBtn from './AllAccountBtn';
import AddAccountBtn from './AddAccountBtn';
import EditDeleteAccountBtn from './EditDeleteAccountBtn';
import './MainButtonStyle.css';

function MainButtons(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3 d-flex justify-content-center">
                    < AllAccountBtn/>
                    < AddAccountBtn/>
                    <EditDeleteAccountBtn/>
                    </div>
                </div>
            </div>
        </>    
    );
}

export default MainButtons;