import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import data from '../../data';

class FormEditDeleteAccount extends React.Component{

    constructor(props){
        super(props);

        this.editAccountName = this.editAccountName.bind(this);
        this.editAccountLastName = this.editAccountLastName.bind(this);
        this.editAccountCard = this.editAccountCard.bind(this);
        this.editAccountBalance = this.editAccountBalance.bind(this);
        this.saveChange = this.saveChange.bind(this);

        this.state = {
            id: "",
            name: "",
            lastName: "",
            card: "",
            balance: ""
        }
    }

    editAccountName(e){
        this.setState({
            name: e.target.value
        });
    }
    editAccountLastName(e){
        this.setState({
            lastName: e.target.value
        });
    }
    editAccountCard(e){
        this.setState({
            card: e.target.value
        });
    }
    editAccountBalance(e){
        this.setState({
            balance: e.target.value
        });
    }

    componentDidMount(){
        const user = data.find((u)=>u.id === parseInt(this.props.match.params.id));

        this.setState({
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            card: user.card,
            balance: user.balance
        });
    }

    saveChange(){
        data.find((u)=>{
            return u.id === this.state.id ? Object.assign(u, this.state) : "" ;
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>Edit</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.editAccountName}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"  placeholder="Enter Last Name" 
                                value={this.state.lastName} 
                                onChange={this.editAccountLastName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="creditC">Credit Card</label>
                                <input type="text" className="form-control" id="card"  placeholder="Enter Credit Card" 
                                value={this.state.card} 
                                onChange={this.editAccountCard}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input type="number" className="form-control" id="balance"  placeholder="Enter Balance" 
                                value={this.state.balance} 
                                onChange={this.editAccountBalance} />
                            </div>
                            <Link to="/TableForAllAccounts">
                                <button type="button" className="btn btn-secondary"
                                onClick={this.saveChange}
                                >Save Change</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(FormEditDeleteAccount);