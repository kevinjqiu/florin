import { connect } from 'react-redux'
import CategorySelect from '../../components/accounts/CategorySelect'
import { updateTransaction } from '../../actions'

const mapStateToProps = (state) => {
    const { categories } = state
    return {
        categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (transactionId, val) => {
            let newCategoryId = val.value
            let transactionData = {
                category_id: newCategoryId
            }
            dispatch(updateTransaction(transactionId, transactionData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect)