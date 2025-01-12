import React from 'react';
import './App.css';
import Card from './components/Card'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const StyledHeader = styled.h1`
  font-size: 100px;
  margin-left: 240px;
  `

  return (
    <div className="App">
      <StyledHeader className="Header">React Wars</StyledHeader>
      <Card />
     
    </div>
  );
}

export default App;