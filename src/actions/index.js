import { ADD_INCOME, RESET_STATE, CHANGE_PAGE, GENERATE_TABLE,  MANAGE_BALANCE, ADD_OUTGOINGS,
         INCOME_HISTORIC, I_HISTORIC_QUERY, GENERATE_REPORT_I, INCOME_HISTORIC_CONTENT, OUTGOINGS_HISTORIC,
         O_HISTORIC_QUERY, GENERATE_REPORT_O, OUTGOINGS_HISTORIC_CONTENT } from '../constants/action-types'
 
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

export function incomeHistoricView(payload) { 
    return { type: INCOME_HISTORIC , payload}
}

export function incomeHistoricQuery(payload) { 
    return { type: I_HISTORIC_QUERY , payload}
}

export function generateIncomeReport(payload) {
    return { type: GENERATE_REPORT_I, payload}
}

export function updateIncomeQuery(payload) {
    return { type: INCOME_HISTORIC_CONTENT, payload}
}

export function outgoingsHistoricView(payload) { 
    return { type: OUTGOINGS_HISTORIC, payload}
}
export function outgoingsHistoricQuery(payload) { 
    return { type: O_HISTORIC_QUERY , payload}
}

export function generateOutgoingsReport(payload) {
    return { type: GENERATE_REPORT_O, payload}
}

export function updateOutgoingsQuery(payload) {
    return { type: OUTGOINGS_HISTORIC_CONTENT, payload}
}