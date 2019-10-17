import React from 'react';
import {withRouter} from 'react-router-dom';

class TableForEditDeleteAccount extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: props.dataObj
        }

        this.editAccount = this.editAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
    }
    
    editAccount(e){
        this.props.history.push("/edit-account/" + e.target.id);
    }

    deleteAccount(e){
        this.props.deleteAccount(e.target.id);
    }
    
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Card</th>
                                    <th scope="col" colSpan="3">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.data.map((account)=>{
                                    return(
                                        <tr key={account.id}>
                                            <th scope="row">{account.id}</th>
                                            <td>{account.name}</td>
                                            <td>{account.lastName}</td>
                                            <td>{account.card}</td>
                                            <td>{account.balance}</td>
                                            <td><button type="button" className="btn btn-dark" 
                                                id={account.id} 
                                                onClick={this.editAccount}>
                                                Edit Account</button></td>
                                            <td>
                                            {/* <Link to="/TableForAllAccounts"> */}
                                                <button type="button" className="btn btn-danger" 
                                                id={account.id}
                                                onClick={this.deleteAccount}
                                                >Delete Account</button>
                                            {/* </Link> */}
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(TableForEditDeleteAccount);