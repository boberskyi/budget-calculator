import React from 'react';
import styled from "styled-components";
import {BsFillCupHotFill, BsFillPinAngleFill, BsFillTrash3Fill} from "react-icons/bs";
import {BiShoppingBag} from "react-icons/bi";
import {AiOutlineCreditCard, AiOutlineGift} from "react-icons/ai";

type TransactionItmPropsType = {
    id: number,
    icoId: string,
    icoColor: string,
    title: string,
    date: string,
    value: string,
    pined: boolean,
    removeTransaction: (transactionId:number) => void
}
export const TransactionItm: React.FC<TransactionItmPropsType> = (
    {
        id,
        icoId,
        icoColor,
        title,
        date,
        value,
        pined,
        removeTransaction
    }
) => {
    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case 'BsFillCupHotFill':
                return <BsFillCupHotFill/>;
            case 'BiShoppingBag':
                return <BiShoppingBag/>;
            case 'AiOutlineCreditCard':
                return <AiOutlineCreditCard/>;
            case 'AiOutlineGift':
                return <AiOutlineGift/>;
            default:
                return <AiOutlineCreditCard/>;
        }
    };
    const iconComponent = getIconComponent(icoId);

    return (
        <StyledTransactionItm>
            <StyledTransactionItmLeft>
                <StyledTransactionItmIco color={icoColor}>
                    {iconComponent}
                </StyledTransactionItmIco>
                <StyledTransactionItmText>
                    <StyledTransactionItmTitle>{title}</StyledTransactionItmTitle>
                    <StyledTransactionItmDate>{date}</StyledTransactionItmDate>
                </StyledTransactionItmText>
            </StyledTransactionItmLeft>

            <StyledTransactionItmRight>
                <StyledTransactionItmValue>{value}zł</StyledTransactionItmValue>
                <StyledTransactionItmIco color="45, 138, 254">
                    <BsFillPinAngleFill/>
                </StyledTransactionItmIco>
                <StyledTransactionItmIco
                    color="128, 128, 128"
                    onClick={()=>removeTransaction(id)}
                >
                    <BsFillTrash3Fill/>
                </StyledTransactionItmIco>
            </StyledTransactionItmRight>
        </StyledTransactionItm>
    );
};

const StyledTransactionItm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px;
`
const StyledTransactionItmLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const StyledTransactionItmRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

interface ItmIcoTypes {
    color: string
}

const StyledTransactionItmIco = styled.div<ItmIcoTypes>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  color: rgba(${props => props.color}, 1);
  background-color: rgba(${props => props.color}, .15);
`
const StyledTransactionItmText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`
const StyledTransactionItmTitle = styled.div`
  font-weight: bold;
`
const StyledTransactionItmDate = styled.div`

`
const StyledTransactionItmValue = styled.div`
  font-weight: bold;
`