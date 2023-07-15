import React from 'react';
import styled from "styled-components";

export const Summary = () => {
    return (
        <StyledSummary>
            <StyledDate>July 15 2023</StyledDate>
            <StyledSummaryWrapp>
                <StyledSummaryText>Number of transaction: 04</StyledSummaryText>
                <StyledSummaryText>Value: $7408.00</StyledSummaryText>
            </StyledSummaryWrapp>
        </StyledSummary>
    );
};

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`
const StyledDate = styled.div`
  
`
const StyledSummaryWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
const StyledSummaryText = styled.div`
  
`


