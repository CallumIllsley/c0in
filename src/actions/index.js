import { ADD_INCOME, RESET_STATE, CHANGE_PAGE, GENERATE_TABLE,  MANAGE_BALANCE, ADD_OUTGOINGS } from '../constants/action-types'
 
export function addIncome(payload) { 
    return { type: ADD_INCOME , payload}
}

export function changePage(payload) {
    return { type: CHANGE_PAGE, payload}
}

export function generateTable(payload) { 
    return { type: GENERATE_TABLE, payload}
}

export function manageBalance(payload) { 
    return { type: MANAGE_BALANCE, payload}
}

export function addOutgoings(payload) { 
    return { type: ADD_OUTGOINGS , payload}
}

export function resetState(payload) { 
    return { type: RESET_STATE , payload}
}