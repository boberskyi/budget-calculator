import React, {useState} from 'react';
import {Link} from "react-router-dom";


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
export const AddTransactionsForm:React.FC<AddTransactionsFormType> = ({addTransaction}) => {
    const [newTransaction, setNewTransaction] = useState<newTransactionType>({
        title: '',
        date: '',
        amount: '',
        category: '',
        wallet: ''
    });

    const onAddClick = () => addTransaction();
    return (
        <div>
            <input type="text" placeholder='Title'/>
            <input type="number" placeholder='Amount'/>
            <select>
                <option>bills</option>
                <option>investments</option>
            </select>
            <select>
                <option>Home Wallet</option>
            </select>
            <Link to={'/'} onClick={onAddClick}>Add</Link>
        </div>
    );
};