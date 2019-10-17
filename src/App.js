import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import { Route, Switch } from 'react-router-dom';
import TableForAllAccounts from './Components/TableForAllAccounts/TableForAllAccounts';
import FormAddNewAccount from './Components/FormAddNewAccount/FormAddNewAccount';
import TableForEditDeleteAccount from './Components/TableForEditDeleteAccount/TableForEditDeleteAccount';
import FormEditDeleteAccount from './Components/FormEditDeleteAccount/FormEditDeleteAccount';
import NotFound from "./Components/NotFound/NotFound";
import {withRouter} from 'react-router-dom';
import MainButtons from './Components/MainButtons/MainButtons';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    }

    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount(id) {

    const selectedAccount = this.state.data.find(s => s.id === parseInt(id))

    let accountCopy = [...this.state.data];

    let index = accountCopy.indexOf(selectedAccount);

    accountCopy.splice(index, 1);

    this.setState({data: accountCopy});

    //console.log(this.state.data);
    this.props.history.push("/TableForAllAccounts");
  }


  render() {
    return (
      <>
       <MainButtons />
        <Switch>
        <Route exact path="/" render={() => <TableForAllAccounts dataObj={this.state.data} />}></Route>
        <Route exact path="/TableForAllAccounts" render={() => <TableForAllAccounts dataObj={this.state.data} />} />
        <Route exact path="/FormAddNewAccount" render={() => <FormAddNewAccount dataObj={this.state.data}/>}/>
        <Route exact path="/TableForEditDeleteAccount" render={() => <TableForEditDeleteAccount dataObj={this.state.data} deleteAccount={this.deleteAccount} />} />
        <Route exact path="/edit-account/:id" render={() => <FormEditDeleteAccount />} />
        <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);