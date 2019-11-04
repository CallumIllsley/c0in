import { ADD_INCOME, MANAGE_BALANCE, CHANGE_PAGE, GENERATE_TABLE, ADD_OUTGOINGS, RESET_STATE, INCOME_HISTORIC, I_HISTORIC_QUERY, GENERATE_REPORT_I, 
        INCOME_HISTORIC_CONTENT, OUTGOINGS_HISTORIC, O_HISTORIC_QUERY, OUTGOINGS_HISTORIC_CONTENT, GENERATE_REPORT_O } from '../constants/action-types'

const initialState = {
    income: [], 
    outgoings: [],
    pageLoaded: 'overview',
    generateTable: false,
    generateReportI: false,
    balance: 0,
    viewIncomeHistoric: false,
    incomeHistoricQuery: [],
    incomeHistoricContent: [],
    viewOutgoingsHistoric: false,
    outgoingsHistoricQuery: [],
    outgoingsHistoricContent: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
     case ADD_INCOME:
        return Object.assign({}, state, {
            income: state.income.concat(action.payload)
        })
        break

    case CHANGE_PAGE: 
        return ({...state, pageLoaded : action.payload})
        break

    case GENERATE_TABLE:
        return ({...state, generateTable: action.payload})
        break

    case MANAGE_BALANCE: 
        return ({...state, balance: action.payload})
        break

    case ADD_OUTGOINGS :
        return Object.assign({}, state, {
            outgoings: state.outgoings.concat(action.payload)
        })
        break

    case RESET_STATE: 
        return initialState
        break

    case INCOME_HISTORIC:
        return ({...state, viewIncomeHistoric: action.payload})
        break

    case I_HISTORIC_QUERY:
        return ({...state, incomeHistoricQuery: action.payload})
        break

    case GENERATE_REPORT_I: 
        return ({...state, generateReportI: action.payload})

    case INCOME_HISTORIC_CONTENT: 
        return ({...state, incomeHistoricContent: action.payload})
        break

    case OUTGOINGS_HISTORIC: 
        return ({...state, viewOutgoingsHistoric: action.payload})
        break

    case O_HISTORIC_QUERY: 
        return({...state, outgoingsHistoricQuery: action.payload})
        break

    case GENERATE_REPORT_O: 
        return({...state, generateReportO: action.payload})
        break
    
    case OUTGOINGS_HISTORIC_CONTENT:
        return({...state, outgoingsHistoricContent: action.payload})
        break

    default: return state

    }
}

export default rootReducer