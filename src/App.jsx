
import React from 'react';
import styled from 'styled-components';
import TimerSettings from './components/TimerSettings';
import Display from './components/display';
import PlayPauseAndReset from './components/playPauseAndReset';
import Footer from './components/footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #174950, #008080);
  color: #fff;  /* Color de texto blanco */
  font-family: Arial, sans-serif;
  font-size: 8px;

  @media (min-width: 600px) {
    font-size: 16px;
  }

  h1 {
    color: #fff;  
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size:  2.7rem;
    font-weight: bold;
    text-align: center;
  }


`;




function App() {
  
  return (
   <AppContainer>
      <h1>25 + 5 Clock</h1>
      <TimerSettings />
      <Display />
      <PlayPauseAndReset />
      <Footer />
      
    </AppContainer>
  )
}

export default App
