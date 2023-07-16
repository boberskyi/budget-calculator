import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Main} from "./components/Main";
import {Sidebar} from "./components/Sidebar";

export type TransactionsType = {
    id: number,
    icoId: string,
    icoColor: string,
    title: string,
    date: string,
    value: string,
    pined: boolean
}
export type SortType = 'standard' | 'ascending' | 'descending';
const App: React.FC = () => {

    let [transactions, setTransactions] = useState<TransactionsType[]>([
        {
            id: 1,
            icoId: 'BsFillCupHotFill',
            icoColor: '45, 138, 254',
            title: 'Restaurants & Cafe',
            date: '13 July 2023',
            value: '99.00',
            pined: false
        },
        {
            id: 2,
            icoId: 'BiShoppingBag',
            icoColor: '152, 127, 255',
            title: 'Clothes & Shopping',
            date: '12 July 2023',
            value: '2300.00',
            pined: false
        },
        {
            id: 3,
            icoId: 'AiOutlineCreditCard',
            icoColor: '241, 188, 44',
            title: 'Credit & Loans',
            date: '9 July 2023',
            value: '300.00',
            pined: false
        },
        {
            id: 4,
            icoId: 'AiOutlineGift',
            icoColor: '237, 121, 120',
            title: 'Gifts Card',
            date: '1 July 2023',
            value: '85.00',
            pined: false
        },
    ]);


    const removeTransaction = (transactionId: number) => setTransactions(transactions.filter(tr => tr.id !== transactionId));
    let [sorted, setSorted] = useState<SortType>('standard');

    const sortByValue = (sortVal:SortType) => setSorted(sortVal);
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
                />
                <Sidebar/>
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
