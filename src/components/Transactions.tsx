import React from 'react';
import styled from "styled-components";
import {TransactionItm} from "./TransactionItm";

export const Transactions = () => {
    return (
        <StyledTransactions>
            <TransactionItm />
            <TransactionItm />
            <TransactionItm />
            <TransactionItm />
            <TransactionItm />
            <TransactionItm />
        </StyledTransactions>
    );
};

const StyledTransactions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`