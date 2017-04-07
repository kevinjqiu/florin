import { RECEIVE_ACCOUNTS_DATA, RECEIVE_TRANSACTIONS, UPDATE_TRANSACTION_SUCCEEDED, DELETE_TRANSACTION_SUCCEEDED } from '../actions'
import querystring from 'querystring'
import { matchPath } from 'react-router'

const initState = {
    accounts: [],
    currentAccountId: "_all",
    transactions: [],  // transactions in the current selected account
    currentDateRange: 'thisMonth'
}

const getDateRangeFromSearch = (search) => {
    let params = querystring.parse(search.slice(1, search.length))
    return params.dateRange  // TODO: work with custom date range
}

const accounts = (state=initState, action) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTS_DATA:
            return {
                ...state,
                accounts: action.accounts
            }
        case RECEIVE_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions
            }
        case '@@router/LOCATION_CHANGE':
            const {pathname, search} = action.payload
            const match = matchPath(pathname, {
                path: '/accounts/:accountId'
            })
            if (match) {
                return {
                    ...state,
                    currentAccountId: match.params.accountId,
                    currentDateRange: getDateRangeFromSearch(search)
                }
            }
            return state
        case UPDATE_TRANSACTION_SUCCEEDED:
            let { transactions } = state
            const theTransaction = action.transaction
            const updatedTransactions = transactions.map((transaction) => {
                if (transaction.id !== theTransaction.id) {
                    return transaction
                }
                return theTransaction
            })
            return {
                ...state,
                transactions: updatedTransactions
            }
        case DELETE_TRANSACTION_SUCCEEDED:
            const { transactionId } = action
            transactions = state.transactions
            return {
                ...state,
                transactions: transactions.filter((transaction) => {
                    return transaction.id !== transactionId
                })
            }
        default:
            return state
    }
}

export default accounts