import {ADD_INCOME} from '../constants/action-types'
import {CHANGE_PAGE} from '../constants/action-types'

const initialState = {
    income: [], 
    pageLoaded: 'overview'
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_INCOME) {
        return Object.assign({}, state, {
            income: state.income.concat(action.payload)
        })
    }

    if (action.type === CHANGE_PAGE) {
        return state.pageLoaded = action.payload
    }

    return state
}

export default rootReducer