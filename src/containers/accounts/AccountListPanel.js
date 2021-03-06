import { connect } from 'react-redux'
import AccountListPanel from '../../components/accounts/AccountListPanel'
import { createAccount, updateAccount, fetchAccountsData, deleteAccount } from '../../actions'
import { withRouter } from 'react-router'

const mapStateToProps = ({ ui, accounts, currentAccountId }) => {
    accounts = accounts.accounts
    return {
        accounts,
        currentAccountId,
        loadingAccountsData: ui.loadingAccountsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAccountsData: () => {
            dispatch(fetchAccountsData())
        },
        saveNewAccount: (account) => {
            dispatch(createAccount({account}))
        },
        updateAccount: (accountId, account) => {
            dispatch(updateAccount(accountId, {account}))
        },
        deleteAccount: (accountId) => {
            dispatch(deleteAccount(accountId))
            // After account delete, redirect to account _all
        },
    }
}

// withRouter makes the `match` attribute available to the component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountListPanel))