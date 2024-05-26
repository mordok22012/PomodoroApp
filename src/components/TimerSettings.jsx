// src/components/TimerSettings.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 60vw;
  }
`;
const LengthControl = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  font-weight: bold;
  margin: 10px;

  span {
    margin: 0 1rem;
  }
 
  
  @media (min-width: 600px) {
    margin: 20px;
    font-size: 1.5rem;
    
  }

  

  
`;



const BreakLength = ({ breakLength, setBreakLength }) => (
  <div>
    <h2 style={{textAlign: "center", }}>Break Length</h2>
    <LengthControl>
    <FaArrowDown />
    <span> 5</span>
    <FaArrowUp />
  </LengthControl>
  </div>
);


const SessionLength = ({ sessionLength, setSessionLength }) => (
  <div>
    <h2  style={{textAlign: "center", }}>Session Length</h2>
    <LengthControl>
    <FaArrowDown />
    <span>25</span>
    <FaArrowUp />
  </LengthControl>
  </div>
);


const TimerSettings = () => {
  return (
    <SettingsContainer>
      <BreakLength/>
      <SessionLength/>
    </SettingsContainer>
  )
}

// Definir estilos para los subcomponentes
/* 


const BreakLength = ({ breakLength, setBreakLength }) => (
  <LengthControl>
    <h2>Break Length</h2>
    <Button onClick={() => setBreakLength(breakLength - 1)}>-</Button>
    <span>{breakLength} minutes</span>
    <Button onClick={() => setBreakLength(breakLength + 1)}>+</Button>
  </LengthControl>
);

const SessionLength = ({ sessionLength, setSessionLength }) => (
  <LengthControl>
    <h2>Session Length</h2>
    <Button onClick={() => setSessionLength(sessionLength - 1)}>-</Button>
    <span>{sessionLength} minutes</span>
    <Button onClick={() => setSessionLength(sessionLength + 1)}>+</Button>
  </LengthControl>
);

const TimerSettings = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <SettingsContainer>
      <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
      <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} />
    </SettingsContainer>
  );
};

export default TimerSettings;

*/
export default TimerSettings;