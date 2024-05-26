
import React, { useState } from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 1rem;
  margin-top: 1rem;
  border: 6px solid #174950;
  border-radius: 40px;
  
  h3 {
    font-size:1.5rem;
  }
  span {
    font-size: 3rem;
    font-weight: bold;
  }

`;


const Display = () => {
    return (
        <DisplayContainer>
            <h3>Session</h3>
            <span>25:00</span>
        </DisplayContainer>
    )
}

export default Display;