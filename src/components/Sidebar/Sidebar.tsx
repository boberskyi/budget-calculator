import React from 'react';
import styled from "styled-components";
import {AiFillShop, AiOutlineCreditCard, AiOutlineGift, AiOutlineStock} from "react-icons/ai";
import {RiBillFill} from "react-icons/ri";
import {CategoriesPropsType} from "../../App";
import {BsFillCupHotFill} from "react-icons/bs";
import {BiShoppingBag} from "react-icons/bi";
import {SidebarProfile} from "./SidebarProfile/SidebarProfile";

type SidebarPropsType = {
    categories: CategoriesPropsType[]
}
export const Sidebar:React.FC<SidebarPropsType> = (
    {
        categories
    }) => {


    return (
        <StyledSidebar>
            <SidebarProfile/>


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

                {categories.map(cat => {
                    const getIconSidebar = (iconName: string) => {
                        switch (iconName) {
                            case 'RiBillFill':
                                return <RiBillFill/>;
                            case 'AiOutlineStock':
                                return <AiOutlineStock/>;
                            default:
                                return <RiBillFill/>;
                        }
                    };
                    const iconSidebar = getIconSidebar(cat.icoId);

                    return (
                        <StyledSidebarSectionItm key={cat.id}>
                            <StyledSidebarSectionItmIco color={cat.bgColor}>
                                {iconSidebar}
                            </StyledSidebarSectionItmIco>
                            <StyledSidebarSectionItmTxt>
                                <StyledSidebarSectionItmTitle>{cat.title}</StyledSidebarSectionItmTitle>
                                <StyledSidebarSectionItmValue>{cat.value}zł</StyledSidebarSectionItmValue>
                            </StyledSidebarSectionItmTxt>
                        </StyledSidebarSectionItm>
                    )
                })}

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

const StyledSidebarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  font-weight: bold;
`
const StyledSidebarSectionItmValue = styled.div`
  
`
const StyledSidebarSectionBtnMore = styled.button`
  border: 1px dashed gray;
  padding: 3px 7px;
  font-size: 20px;
`
