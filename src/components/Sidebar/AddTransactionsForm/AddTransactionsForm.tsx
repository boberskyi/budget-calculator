import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {UniversalInput} from "../../UniversalInput/UniversalInput";
import {useDispatch, useSelector} from "react-redux";
import {addTransactionAC} from "../../../state/transactionsReducer";
import {v1} from 'uuid';
import {UniversalSelect} from "../../UniversalSelect/UniversalSelect";
import {AppRootStateType} from "../../../state/store";
import {CategoriesPropsType, TransactionsType} from "../../../App";


type newTransactionType = {
    title: string,
    date: string,
    amount: string,
    category: string,
    wallet: string
}

type AddTransactionsFormType = {
    addTransaction: () => void
}
export const AddTransactionsForm: React.FC<AddTransactionsFormType> = ({addTransaction}) => {
    const dispatch = useDispatch();
    const categories = useSelector<AppRootStateType, CategoriesPropsType[]>(state => state.categories);
    const [newTransaction, setNewTransaction] = useState({
        title: '',
        date: '',
        amount: '',
        category: '',
        wallet: ''
    })
    const onAddClick = () => dispatch(addTransactionAC(
        v1(),
        '123,12,20',
        newTransaction.title,
        newTransaction.date,
        newTransaction.amount,
        false
    ))

    const onTitleChange = (title: string) => {
        setNewTransaction({...newTransaction, title: title})
    }
    const onAmountChange = (title: string) => {
        setNewTransaction({...newTransaction, amount: title})
    }
    const onDateChange = (title: string) => {
        setNewTransaction({...newTransaction, date: title})
    }

    return (
        <div>
            <UniversalInput
                type={"datetime-local"}
                callback={onDateChange}
            />
            <UniversalInput
                type={"text"}
                placeholder={"Title"}
                callback={onTitleChange}
            />
            <UniversalInput
                type={"number"}
                placeholder={"Amount"}
                callback={onAmountChange}
            />

            <UniversalSelect options={categories}/>
            {/*<UniversalSelect options={['Home Wallet']}/>*/}


            <Link to={'/'} onClick={onAddClick}>Add</Link>
        </div>
    );
};