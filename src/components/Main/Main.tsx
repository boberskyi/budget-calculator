import React from 'react';
import {Filter} from "../Filter";
import styled from "styled-components";
import {Summary} from "../Summary";
import {Transactions} from "../Transactions";
import {CategoriesPropsType, SortType, TransactionsType} from "../../App";

type MainPropsType = {
    transactions: TransactionsType[],
    removeTransaction: (transactionId:number) => void,
    sortByValue: (sortVal:SortType) => void,
    categories: CategoriesPropsType[],
    addTransaction: () => void
}
export const Main:React.FC<MainPropsType> = (
    {
        transactions,
        removeTransaction,
        sortByValue,
        categories,
        addTransaction
    }) => {
    return (
        <StyledMain>
            <Filter
                sortByValue={sortByValue}
                categories={categories}
            />
            <Summary/>
            <Transactions
                transactions={transactions}
                removeTransaction={removeTransaction}
                addTransaction={addTransaction}
            />
        </StyledMain>
    );
};

const StyledMain = styled.div`
  width: 100%;
  padding-right: 300px;
  overflow-y: scroll;
`