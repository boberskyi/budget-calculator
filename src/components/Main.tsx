import React from 'react';
import {Filter} from "./Filter";
import styled from "styled-components";
import {Summary} from "./Summary";
import {Transactions} from "./Transactions";
import {TransactionsType} from "../App";

type MainPropsType = {
    transactions: TransactionsType[]
}
export const Main:React.FC<MainPropsType> = ({transactions}) => {
    return (
        <StyledMain>
            <Filter/>
            <Summary/>
            <Transactions transactions={transactions}/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  width: 100%;
  padding-right: 300px;
  overflow-y: scroll;
`