import {combineReducers, legacy_createStore} from 'redux'
import {transactionsReducer} from "./transactionsReducer";
import {categoriesReducer} from "./categoriesReducer";

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    categories: categoriesReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store