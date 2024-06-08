import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setBreakLength, setSessionLength } from '../redux/timerSlice';
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
  
  svg {
    cursor: pointer;
  }
`;



const BreakLength = ({breakLength, setBreakLength }) => (
  <div>
    <h2 id="break-label" style={{textAlign: "center", }}>Break Length</h2>
    <LengthControl>
    <FaArrowDown id="break-decrement" onClick={() => setBreakLength("-")} />
    <span id="break-length"> {breakLength}</span>
    <FaArrowUp id="break-increment" onClick={() => setBreakLength("+")} />
  </LengthControl>
  </div>
);


const SessionLength = ({ sessionLength, setSessionLength }) => (
  <div>
    <h2 id="session-label" style={{textAlign: "center", }}>Session Length</h2>
    <LengthControl>
    <FaArrowDown id="session-decrement" onClick={() => setSessionLength("-")} />
    <span id="session-length">{sessionLength}</span>
    <FaArrowUp id="session-increment" onClick={() => setSessionLength("+")} />
  </LengthControl>
  </div>
);


const TimerSettings = () => {
    const breakLength = useSelector((state) => state.timer.breakLength);
    const sessionLength = useSelector((state) => state.timer.sessionLength);
    const dispatch = useDispatch();
  return (
    <SettingsContainer>
      <BreakLength  
        breakLength = {breakLength} 
        setBreakLength = {(value) => dispatch(setBreakLength(value))} />
      <SessionLength
        sessionLength={sessionLength}
        setSessionLength={(value) => dispatch(setSessionLength(value))}
      />
    </SettingsContainer>
  )
}


export default TimerSettings;