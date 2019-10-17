import React from 'react';

function TableForAllAccounts({dataObj}) {

    return (
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
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataObj && dataObj.map((account) => {
                                return (
                                    <tr key={account.id}>
                                        <th scope="row">{account.id}</th>
                                        <td>{account.name}</td>
                                        <td>{account.lastName}</td>
                                        <td>{account.card}</td>
                                        <td>{account.balance}</td>
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

export default TableForAllAccounts;