import React from 'react';
import styled from "styled-components";

export const SidebarProfile = () => {
    return (
        <StyledSidebarProfile>
            <StyledSidebarProfileName>Bohdan Boberskyi</StyledSidebarProfileName>
            <StyledSidebarProfileAvatar>
                <img src="https://media.licdn.com/dms/image/C4D03AQGulInLYMHQKg/profile-displayphoto-shrink_400_400/0/1649411282010?e=1694649600&v=beta&t=XIS1Fk25t5CvfSuvUeewGDdGEuuycKaQF8nrvHazQN0" alt="Bohdan Boberskyi"/>
            </StyledSidebarProfileAvatar>
        </StyledSidebarProfile>
    );
};

const StyledSidebarProfile = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSidebarProfileName = styled.h3`
  
`
const StyledSidebarProfileAvatar = styled.a`
  width: 30px;
  
  img {
    max-width: 100%;
    border-radius: 5px;
  }
`