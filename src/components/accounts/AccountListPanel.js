import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AccountListPanel.css'

class AccountListPanel extends Component {

    componentDidMount() {
        let { fetchAccountsData } = this.props
        fetchAccountsData.bind(this).call()
    }

    render() {
        let { requestAccountsData, accounts, match, location, currentAccountId } = this.props
        currentAccountId = currentAccountId || match.params.accountId
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Accounts
                    {requestAccountsData ? <i className="fa fa-spinner fa-spin" style={{ fontSize: "16px" }}></i> : ""}
                    </h3>
                </div>
                <div className="panel-body">
                    { requestAccountsData ? "" :
                        <ul className="nav nav-pills nav-stacked">
                            <li className={currentAccountId === undefined || currentAccountId === "_all" ? "active" : ""}>
                                <NavLink to={`/accounts/_all${location.search}`} activeClassName="active">All</NavLink>
                            </li>
                            {accounts.map((account) => {
                                const isActive = currentAccountId === account.id
                                return (
                                    <li key={account.id} className={isActive ? "active" : ""}>
                                        <NavLink to={`/accounts/${account.id}${location.search}`} activeClassName="active">
                                        {account.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export default AccountListPanel