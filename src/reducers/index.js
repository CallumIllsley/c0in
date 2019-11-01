import { ADD_INCOME, MANAGE_BALANCE, CHANGE_PAGE, GENERATE_TABLE } from '../constants/action-types'

const initialState = {
    income: [], 
    pageLoaded: 'overview',
    generateTable: false,
    balance: 0
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_INCOME) {
        return Object.assign({}, state, {
            income: state.income.concat(action.payload)
        })
    }

    if (action.type === CHANGE_PAGE) {
        return ({...state, pageLoaded : action.payload})
    }

    if (action.type === GENERATE_TABLE) {
        return ({...state, generateTable: action.payload})
    }

    if (action.type == MANAGE_BALANCE) {
        return ({...state, balance: action.payload})
    }

    return state
}

export default rootReducer