import { ADD_INCOME } from '../constants/action-types'
import { CHANGE_PAGE } from '../constants/action-types'
 
export function addIncome(payload) { 
    return { type: ADD_INCOME , payload}
}

export function changePage(payload) {
    return { type: CHANGE_PAGE, payload}
}