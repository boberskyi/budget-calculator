import React from 'react';
import styled from "styled-components";
import {TransactionItm} from "./TransactionItm";
import {TransactionsType} from "../App";
import {Link, useLocation} from "react-router-dom";
import {Route, Routes} from "react-router";
import {AddTransactionsForm} from "./Sidebar/AddTransactionsForm/AddTransactionsForm";

type TransactionsPropsType = {
    transactions: TransactionsType[],
    removeTransaction: (transactionId:number) => void,
    addTransaction: () => void
}
export const Transactions:React.FC<TransactionsPropsType> = (
    {
        transactions,
        removeTransaction,
        addTransaction
    }) => {

    const location = useLocation();
    return (
        <StyledTransactions>
            <StyledAddTransaction to={'/add'}>Add transaction</StyledAddTransaction>
            <Routes>
                <Route path={'/add'} element={<AddTransactionsForm addTransaction={addTransaction}/>}/>
            </Routes>
            {location.pathname === '/' && transactions.map(tr => {
                return (
                    <TransactionItm
                        key={tr.id}
                        id={tr.id}
                        icoId={tr.icoId}
                        icoColor={tr.icoColor}
                        title={tr.title}
                        date={tr.date}
                        value={tr.value}
                        pined={tr.pined}
                        removeTransaction={removeTransaction}
                    />
                )
            })}
        </StyledTransactions>
    );
};

const StyledTransactions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`
const StyledAddTransaction = styled(Link)`
  padding: 10px;
`