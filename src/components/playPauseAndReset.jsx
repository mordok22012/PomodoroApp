import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { playAndPause, reset, countdown } from '../redux/timerSlice';
import { FaPlay, FaPause } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import sound from '../assets/BeepSound.mp3';

const ButtonsContainer = styled.div`
    display: flex;
    padding: .5rem;
    font-size: 1.5rem;

`;

const PlayPauseAndReset = () => {
    const { isRunning, timeLeft } = useSelector((state) => state.timer);
    const dispatch = useDispatch();
    
    // Effect hook to handle the timer interval
    useEffect(() => {    
        let timer;
        if (isRunning) {
            // Starts an interval that dispatches the countdown action every second
            timer = setInterval(() => {
                dispatch(countdown());
            },1000);
        }
        // Clear the span when the component is unmounted or when "isRunning" changes
        return () => clearInterval(timer);
    }, [isRunning, dispatch] );
    
    // Effect hook to play the sound when the timer reaches 0
    useEffect(() => {
        if (timeLeft === 0) {
            const audio = new Audio(sound);
            audio.play();
        }
    }, [timeLeft])

    const handlePlayAndPause = () =>  dispatch(playAndPause());
   

    const handleReset = () => {
        dispatch(reset());
        const audio = new Audio(sound);
        audio.pause();
        audio.currentTime = 0;

    };

    return (
        <ButtonsContainer>
            <div id="start_stop" onClick={handlePlayAndPause}>
                <FaPlay />
                <FaPause />
            </div>
            <VscDebugRestart id="reset" onClick={handleReset}/>
        </ButtonsContainer>
    );
}

export default PlayPauseAndReset;