import React from 'react';
import styled from "styled-components";
import {TbArrowsTransferDown} from "react-icons/tb";

export const Filter = () => {
    return (
        <StyledFilter>
            <StyledFilterBtn>Group By <TbArrowsTransferDown/></StyledFilterBtn>
            <StyledFilterBtn>Realisation <TbArrowsTransferDown/></StyledFilterBtn>
            <StyledFilterBtn>Dates <TbArrowsTransferDown/></StyledFilterBtn>
            <StyledFilterBtn>Types <TbArrowsTransferDown/></StyledFilterBtn>
            <StyledFilterBtn>Sample <TbArrowsTransferDown/></StyledFilterBtn>
            <StyledFilterBtn>Extended <TbArrowsTransferDown/></StyledFilterBtn>
        </StyledFilter>
    );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const StyledFilterBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgba(128, 128, 128, .4);
  color: rgba(128, 128, 128, 1);
`