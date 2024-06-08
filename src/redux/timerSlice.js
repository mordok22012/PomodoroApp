
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 25 * 60,
  isRunning: false,
  isBreak : false,
  
};
//Auxiliary function to set the timer duration
const setTimerLength = (stateValue, payloadValue) => {
  // Limit duration between 1 and 60 minutes
  if ((payloadValue === "+" && stateValue === 60) || (payloadValue === "-" && stateValue === 1)) {
    return stateValue;
  } else {
    return payloadValue === "+" ? stateValue + 1 : stateValue - 1;
  }
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,

  reducers: {
    setBreakLength: (state, action) => {
     if (state.isRunning === false) {
      state.breakLength = setTimerLength(state.breakLength, action.payload);
      state.timeLeft = state.isBreak ? state.breakLength * 60 : state.sessionLength * 60;
     }
      
    },
    setSessionLength: (state, action) => {
      if (state.isRunning === false) {
        state.sessionLength = setTimerLength(state.sessionLength, action.payload);
        state.timeLeft = state.isBreak ? state.breakLength * 60 : state.sessionLength * 60;
      }
    },

    reset: (state) =>  {
      state.isRunning = false;
      state.isBreak = false;
      state.breakLength = 5;
      state.sessionLength = 25;
      state.timeLeft = state.sessionLength * 60;
    },

    playAndPause: (state) => {
      state.isRunning = !state.isRunning;
    },

    //Action to decrease the remaining time
    countdown: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }else {
        state.isBreak = !state.isBreak;
        state.timeLeft = state.isBreak ? 5 * 60 : 25 * 60;
      }
    }
  },
});

export const { setBreakLength, setSessionLength, playAndPause, reset, countdown  } = timerSlice.actions;

export default timerSlice.reducer;
