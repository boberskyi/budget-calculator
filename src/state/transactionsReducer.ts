import { v1 } from "uuid";
import {TransactionsType} from "../App";

const ADD_TRANSACTION = 'ADD_TRANSACTION';

let initialTransactions:TransactionsType[] = [

]

export type InitialTransactionsType = ReturnType<typeof addTransactionAC>;

export const addTransactionAC = (icoId:string, icoColor:string, title: string, date:string, value: string, pined: boolean) => {
    return {
        type: ADD_TRANSACTION,
        payload: {
            icoId,
            icoColor,
            title,
            date,
            value,
            pined
        }
    } as const
}

export const transactionsReducer = (state = initialTransactions, action:InitialTransactionsType):TransactionsType[] => {
    switch (action.type) {
        case ADD_TRANSACTION: {
            return [
                ...state,
                {
                    id: v1(),
                    icoId: action.payload.icoId,
                    icoColor: action.payload.icoColor,
                    title: action.payload.title,
                    date: action.payload.date,
                    value: action.payload.value,
                    pined: action.payload.pined
                }
            ]
        }
        default:
            return state
    }
}