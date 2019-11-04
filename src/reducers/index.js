import { ADD_INCOME, MANAGE_BALANCE, CHANGE_PAGE, GENERATE_TABLE, ADD_OUTGOINGS, RESET_STATE } from '../constants/action-types'

const initialState = {
    income: [], 
    outgoings: [],
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

    if (action.type === ADD_OUTGOINGS) { 
        return Object.assign({}, state, {
            outgoings: state.outgoings.concat(action.payload)
        })
    }

    if (action.type === RESET_STATE) { 
        return initialState
    }

    return state
}

export default rootReducer