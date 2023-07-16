import React from 'react';
import styled from "styled-components";
import {TransactionItm} from "./TransactionItm";
import {TransactionsType} from "../App";

type TransactionsPropsType = {
    transactions: TransactionsType[],
    removeTransaction: (transactionId:number) => void
}
export const Transactions:React.FC<TransactionsPropsType> = (
    {
        transactions,
        removeTransaction
    }) => {
    return (
        <StyledTransactions>
            {transactions.map(tr => {
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