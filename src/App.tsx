import React from 'react';
import './App.css';
import styled from "styled-components";
import {Main} from "./components/Main";
import {Sidebar} from "./components/Sidebar";

export type TransactionsType = {
    id: number,
    ico: string,
    icoColor: string,
    title: string,
    date: string,
    value: string,
    pined: boolean
}
function App() {
const Transactions:TransactionsType[] = [
    {
        id: 1,
        ico: 'BsFillCupHotFill',
        icoColor: '45, 138, 254',
        title: 'Restaurants & Cafe',
        date: '13 July 2023',
        value: '99.00',
        pined: false
    },
    {
        id: 2,
        ico: 'LiaShoppingBagSolid',
        icoColor: '152, 127, 255',
        title: 'Clothes & Shopping',
        date: '12 July 2023',
        value: '2300.00',
        pined: false
    },
    {
        id: 3,
        ico: 'AiOutlineCreditCard',
        icoColor: '241, 188, 44',
        title: 'Credit & Loans',
        date: '9 July 2023',
        value: '300.00',
        pined: false
    },
    {
        id: 4,
        ico: 'AiOutlineGift',
        icoColor: '237, 121, 120',
        title: 'Gifts Card',
        date: '1 July 2023',
        value: '85.00',
        pined: false
    },
]
  return (
    <StyledApp className="App">
      <StyledWrapper>
        <Main transactions={Transactions}/>
        <Sidebar/>
      </StyledWrapper>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: #ffd4c9;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  height: 80vh;
  min-height: 500px;
  width: 100%;
  background-color: #f1f2f8;
  border-radius: 15px;
  padding: 25px;
  display: flex;
`
