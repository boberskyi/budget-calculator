import React from 'react';
import styled from "styled-components";

export const Sidebar = () => {
    return (
        <StyledSidebar>

        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9fafc;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`