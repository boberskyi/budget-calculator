import React from 'react';
import {Filter} from "./Filter";
import styled from "styled-components";
import {Summary} from "./Summary";
import {Transactions} from "./Transactions";

export const Main = () => {
    return (
        <StyledMain>
            <Filter/>
            <Summary/>
            <Transactions/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  width: 100%;
  padding-right: 300px;
  overflow-y: scroll;
`