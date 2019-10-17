import React from 'react';
import {Link} from 'react-router-dom';

class FormAddNewAccount extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: "",
            name: "",
            lastName: "",
            card: "",
            balance: ""
        }

        this.changeName = this.changeName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeCard = this.changeCard.bind(this);
        this.changeBalance = this.changeBalance.bind(this);
        this.addNewAccount = this.addNewAccount.bind(this);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        });
    }
    changeLastName(e){
        this.setState({
            lastName: e.target.value
        });
    }
    changeCard(e){
        this.setState({
            card: e.target.value
        });
    }
    changeBalance(e){
        this.setState({
            balance: e.target.value
        });
    }
    addNewAccount(){
        console.log(this.props)
        this.props.dataObj.push(this.state);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>Add NEW Account</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"  placeholder="Enter Name" 
                                onChange={this.changeName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"  placeholder="Enter Last Name" 
                                onChange={this.changeLastName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="creditC">Credit Card</label>
                                <input type="text" className="form-control" id="card"  placeholder="Enter Credit Card" 
                                onChange={this.changeCard}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input type="number" className="form-control" id="balance"  placeholder="Enter Balance" 
                                onChange={this.changeBalance}/>
                            </div>
                            <Link to="/TableForAllAccounts">
                                <button type="button" className="btn btn-primary" onClick={this.addNewAccount}>Add Account</button>
                            </Link>
                           
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormAddNewAccount;