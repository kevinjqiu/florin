import React from 'react'
import AccountListPanel from '../../containers/accounts/AccountListPanel'
import TransactionsPanel from '../../containers/accounts/TransactionsPanel'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
            <AccountListPanel />
            <TransactionsPanel />
        </div>
    )
}

export default Accounts