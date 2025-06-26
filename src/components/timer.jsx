import React, {  Component }  from 'react';
import TimerSettings from './TimerSettings';
import styled from 'styled-components';

import { FaPlay, FaPause } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import sound from '../assets/BeepSound.mp3';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conten: center;
  width: 80vw;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40%;
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

const ButtonsContainer = styled.div`
    display: flex;
    padding: .5rem;
    font-size: 1.5rem;
    justify-content: center;

    button {
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
    }
    
    svg {
    cursor: pointer;
  }

`;
const {useState, useEffect, useRef, useReducer} = React;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength : 25, // 25 minutes in seconds
      breakLength : 5, // 5 minutes in seconds
      timeLeft: 25 * 6, // In milliseconds
      isRunning: false,
      mode: "session",
      temporizerInitialized: false,
      beepPlaying: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.decrementBreakLength = this.decrementBreakLength.bind(this);
    this.incrementBreakLength = this.incrementBreakLength.bind(this);
    this.decrementSessionLength = this.decrementSessionLength.bind(this);
    this.incrementSessionLength = this.incrementSessionLength.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.formatDisplay = this.formatDisplay.bind(this);
    this.handlePlayAndPause = this.handlePlayAndPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => ({
      timeLeft: this.state.mode === "session" ? this.state.sessionLength * 60 : 
      this.state.breakLength * 60 ,
      
    }));
    
  }

  


  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.isRunning === false && this.state.isRunning === true) {
      this.startTimer();
    }else if (prevState.isRunning === true && this.state.isRunning === false) {
      this.stopTimer();
    }
    
    if (this.state.timeLeft === 0) {
      if (this.state.mode === "session" ) {
        this.setState({
          mode: "break",
          timeLeft: this.state.breakLength * 60  
        });
      } else if (this.state.mode === "break") {
        this.setState({
          mode: "session",
          timeLeft: this.state.sessionLength * 60 
        });
      }
    }

   
  }

  startTimer  = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft - 1
      }));
      console.log(this.state.timeLeft );
    }, 1000);

  }

  
  startTimerBreak  = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft - 1
      }));
      console.log(this.state.timeLeft );
    }, 1000);

  }
    stopTimer = () => {
      clearInterval(this.interval);
    }

    

  //Start logic to set the timer
  decrementBreakLength = () => {
    if ( this.state.temporizerInitialized === false 
      && this.state.isRunning === false) {

      this.setState((prevState) => ({
      breakLength: this.state.breakLength - 1 > 0 ? this.state.breakLength - 1 : 1,
      timeLeft: this.state.mode === "break" &&
      this.state.breakLength - 1 > 0  ? this.state.timeLeft - 60 : this.state.timeLeft

    }));
    console.log(`de break lenght es : ${this.state.breakLength }`);
    };
  }
 
  incrementBreakLength = () => {
    if (this.state.temporizerInitialized === false 
      && this.state.isRunning === false) {
      this.setState((prevState) => ({
        breakLength: this.state.breakLength + 1 <= 60 ? this.state.breakLength + 1 : this.state.breakLength,
        timeLeft: this.state.mode === "break"  &&
         this.state.breakLength + 1 <= 60  ? this.state.timeLeft +  60 : this.state.timeLeft
        
      }));
      console.log(`de break lenght es : ${this.state.breakLength}`);
    };
  }

  decrementSessionLength = () => {
    if ( this.state.temporizerInitialized === false 
      && this.state.isRunning === false) {
      this.setState((prevState) => ({
        sessionLength: this.state.sessionLength - 1 > 0 ? this.state.sessionLength - 1 : 1,
        timeLeft: this.state.mode === "session" &&
        this.state.sessionLength - 1 > 0  ? this.state.timeLeft - 60 : this.state.timeLeft
      }));
      console.log(`de session lenght es : ${this.state.sessionLength }`);
    }
  }
  

  incrementSessionLength = () => {
    if ( this.state.temporizerInitialized === false 
      && this.state.isRunning === false) {
      this.setState((prevState) => ({
        sessionLength: this.state.sessionLength + 1 <= 60 ? this.state.sessionLength + 1 : this.state.sessionLength,
        timeLeft: this.state.mode === "session" && 
        this.state.sessionLength + 1 <= 60  ? this.state.timeLeft +  60 : this.state.timeLeft
      }));
      console.log(`de session lenght es : ${this.state.sessionLength + 1}`);
    }
    
  }
  //End of logic to set the timer
 
  formatTime = (time)  => {
    let output;
  
    if (time < 10) {
      output = '0' + parseInt(time);
    } else {
      output = parseInt(time);
    }
  
    return output;
  }

  formatDisplay = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${this.formatTime(minutes)}:${this.formatTime(sec)}`;
  }

  

  
  
  handlePlayAndPause = () => {
    this.setState((prevState) => {
      return  ({
        temporizerInitialized: prevState.temporizerInitialized === false ? true 
        : prevState.temporizerInitialized,
        isRunning: !prevState.isRunning
      });
    })
   
  }


  handleReset = () => {
    this.stopTimer();
    this.setState({
      isRunning: false,
      temporizerInitialized: false,
      mode: "session",
      breakLength : 5,
      sessionLength : 25,
      timeLeft: 25 * 60 

      
    });
  }

 
  
  render() {
    const { breakLength, sessionLength, mode, timeLeft, isRunning } = this.state;
    return (
      <TimerContainer >
          <TimerSettings 
          incrementBreakLength = { () => this.incrementBreakLength()}
          incrementSessionLength = { () => this.incrementSessionLength()} 
          decrementBreakLength = {() => this.decrementBreakLength()}
          decrementSessionLength = {() => this.decrementSessionLength()}  
          breakLength = {breakLength}
          sessionLength = {sessionLength} 
          />
          <DisplayContainer>
              <h3 id="timer-label" style={{ color:  '#fff' }}>
                  {mode === "session" ? "session" : "break"}
              </h3>
              <span id="time-left" style={{ color: '#fff' }}>{this.formatDisplay(timeLeft)}</span>
          </DisplayContainer>
          <ButtonsContainer>
              <button id="start_stop" onClick={this.handlePlayAndPause} >
                  { isRunning ? (<FaPause />) : (<FaPlay />) }
              </button>
              <VscDebugRestart id="reset" onClick={this.handleReset} />
              <audio id="beep" src={sound} preload="auto" />
          </ButtonsContainer>
      </TimerContainer>);
  };

};


export default Timer;