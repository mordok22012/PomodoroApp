import React, { Component } from 'react';
import styled from 'styled-components';


import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
   
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
  
  svg {
    cursor: pointer;
  }
`;

class BreakLength extends Component {
  render() {
    const {increment, decrement, length} = this.props;

    return (
      <div>
        <h2 id="break-label" style={{ textAlign: "center" }}>Break Length</h2>
        <LengthControl>
          <FaArrowDown id="break-decrement" onClick={decrement} />
          <span id="break-length">{length }</span>
          <FaArrowUp id="break-increment" onClick={increment} />
        </LengthControl>
      </div>
    );
  }
}

class SessionLength extends Component {
  render() {
    const { increment, decrement, length } = this.props;
    return (
      <div>
        <h2 id="session-label" style={{ textAlign: "center" }}>Session Length</h2>
        <LengthControl>
          <FaArrowDown id="session-decrement" onClick={decrement} />
          <span id="session-length">{length}</span>
          <FaArrowUp id="session-increment" onClick={increment} />
        </LengthControl>
      </div>
    );
  }
}


class TimerSettings extends Component {
  render() {
    const { 
      incrementBreakLength, 
      incrementSessionLength, 
      decrementBreakLength, 
      decrementSessionLength,  
      breakLength,
      sessionLength
     } = this.props;
    
    return (
      <SettingsContainer>
        <BreakLength
          length={breakLength}
          decrement={decrementBreakLength}
          increment={incrementBreakLength}
        />
        <SessionLength
          length={sessionLength}
          decrement={decrementSessionLength}
          increment={incrementSessionLength}
        />
      </SettingsContainer>
    );
  }
  
}


export default TimerSettings;