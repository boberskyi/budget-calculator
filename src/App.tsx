import React from 'react';
import './App.css';
import styled from "styled-components";
import {Main} from "./components/Main";
import {Sidebar} from "./components/Sidebar";

function App() {
  return (
    <StyledApp className="App">
      <StyledWrapper>
        <Main/>
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
