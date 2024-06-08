import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  const {timeLeft, isBreak} = useSelector((state) => state.timer);
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return  `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

    return (
        <DisplayContainer>
            <h3 id="timer-label" style={{ color: timeLeft < 60 ? '#8B0F32' : '#fff' }}>
              {isBreak ? "Break" : "Session"}
            </h3>
            <span id="time-left" style={{ color: timeLeft < 60 ? '#8B0F32' : '#fff' }}>{formatTime(timeLeft)}</span>
        </DisplayContainer>
    )
}

export default Display;