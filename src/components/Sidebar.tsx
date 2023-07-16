import React from 'react';
import styled from "styled-components";
import {AiFillShop} from "react-icons/ai";
import {RiBillFill} from "react-icons/ri";

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledSidebarProfile>
                <StyledSidebarProfileName>Bohdan Boberskyi</StyledSidebarProfileName>
                <StyledSidebarProfileAvatar>
                    <img src="https://media.licdn.com/dms/image/C4D03AQGulInLYMHQKg/profile-displayphoto-shrink_400_400/0/1649411282010?e=1694649600&v=beta&t=XIS1Fk25t5CvfSuvUeewGDdGEuuycKaQF8nrvHazQN0" alt="Bohdan Boberskyi"/>
                </StyledSidebarProfileAvatar>
            </StyledSidebarProfile>
            <StyledSidebarSection>
                <StyledSidebarSectionTitle>
                    Wallets
                    <StyledSidebarSectionBtnMore>+</StyledSidebarSectionBtnMore>
                </StyledSidebarSectionTitle>
                <StyledSidebarSectionItm>
                    <StyledSidebarSectionItmIco color="#7033ff">
                        <AiFillShop/>
                    </StyledSidebarSectionItmIco>
                    <StyledSidebarSectionItmTxt>
                        <StyledSidebarSectionItmTitle>Home Wallet</StyledSidebarSectionItmTitle>
                        <StyledSidebarSectionItmValue>$875.00</StyledSidebarSectionItmValue>
                    </StyledSidebarSectionItmTxt>
                </StyledSidebarSectionItm>
            </StyledSidebarSection>
            <StyledSidebarSection>
                <StyledSidebarSectionTitle>
                    Categories
                    <StyledSidebarSectionBtnMore>+</StyledSidebarSectionBtnMore>
                </StyledSidebarSectionTitle>
                <StyledSidebarSectionItm>
                    <StyledSidebarSectionItmIco color="#06b681">
                        <RiBillFill/>
                    </StyledSidebarSectionItmIco>
                    <StyledSidebarSectionItmTxt>
                        <StyledSidebarSectionItmTitle>Bills</StyledSidebarSectionItmTitle>
                        <StyledSidebarSectionItmValue>$875.00</StyledSidebarSectionItmValue>
                    </StyledSidebarSectionItmTxt>
                </StyledSidebarSectionItm>
            </StyledSidebarSection>
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
  padding: 20px;
  gap: 40px;
`
const StyledSidebarProfile = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSidebarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const StyledSidebarSectionTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSidebarSectionItm = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
interface SidebarItmIcoType {
    color: string
}
const StyledSidebarSectionItmIco = styled.div<SidebarItmIcoType>`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 5px;
`
const StyledSidebarSectionItmTxt = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledSidebarSectionItmTitle = styled.div`
  
`
const StyledSidebarSectionItmValue = styled.div`
  
`
const StyledSidebarSectionBtnMore = styled.button`
  border: 1px dashed gray;
  padding: 3px 7px;
  font-size: 20px;
`
