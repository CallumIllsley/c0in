import { ADD_INCOME } from '../constants/action-types'
import { CHANGE_PAGE } from '../constants/action-types'
import { GENERATE_TABLE } from '../constants/action-types'
import { MANAGE_BALANCE } from '../constants/action-types'
 
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