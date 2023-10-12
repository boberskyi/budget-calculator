import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Main} from "./components/Main/Main";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {legacy_createStore} from "redux";
import { v1 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addTransactionAC} from "./state/transactionsReducer";

export type TransactionsType = {
    id: string,
    icoId: string,
    icoColor: string,
    title: string,
    date: string,
    value: string,
    pined: boolean
}
export type CategoriesPropsType = {
    id: string,
    icoId: string,
    bgColor: string,
    title: string,
    value: string
}
export type SortType = 'standard' | 'ascending' | 'descending';
const App: React.FC = () => {


    const dispatch = useDispatch();
    const transactions = useSelector<AppRootStateType, TransactionsType[]>(state => state.transactions);
    const categories: CategoriesPropsType[] = [
        {
            id: '1',
            icoId: 'RiBillFill',
            bgColor: '#06b681',
            title: 'Bills',
            value: '875.00'
        },
        {
            id: '2',
            icoId: 'AiOutlineStock',
            bgColor: '#ff9165',
            title: 'Investments',
            value: '3000.00'
        },
    ]


    const removeTransaction = (transactionId: string) => {
        //setTransactions(transactions.filter(tr => tr.id !== transactionId));
    }
    const addTransaction = () => dispatch(addTransactionAC('BsFillCupHotFill', '0,0,0', 'ActionCreator', 'right now', '999', false));

    let [sorted, setSorted] = useState<SortType>('standard');

    const sortByValue = (sortVal: SortType) => setSorted(sortVal);
    const modifyedTransactions = [...transactions];
    if (sorted === 'ascending') {
        modifyedTransactions.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    }
    if (sorted === 'descending') {
        modifyedTransactions.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    }

    return (
        <StyledApp className="App">
                <StyledWrapper>
                    <Main
                        transactions={modifyedTransactions}
                        removeTransaction={removeTransaction}
                        sortByValue={sortByValue}
                        categories={categories}
                        addTransaction={addTransaction}
                    />
                    <Sidebar categories={categories}/>
                </StyledWrapper>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
  background-color: #ffd4c9;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  height: 80vh;
  min-height: 500px;
  width: 100%;
  background-color: #f1f2f8;
  border-radius: 15px;
  padding: 25px;
  display: flex;
`
