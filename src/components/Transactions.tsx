import React from 'react';
import styled from "styled-components";
import {TransactionItm} from "./TransactionItm";
import {TransactionsType} from "../App";

type TransactionsPropsType = {
    transactions: TransactionsType[]
}
export const Transactions:React.FC<TransactionsPropsType> = ({transactions}) => {
    return (
        <StyledTransactions>
            {transactions.map(tr => {
                return (
                    <TransactionItm
                        key={tr.id}
                        icoId={tr.icoId}
                        icoColor={tr.icoColor}
                        title={tr.title}
                        date={tr.date}
                        value={tr.value}
                        pined={tr.pined}
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