import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const ButtonsContainer = styled.div`
    display: flex;
    padding: .5rem;
    font-size: 1.5rem;

`;

const PlayPauseAndReset = () => {
    return (
        <ButtonsContainer>
            <div>
                <FaPlay />
                <FaPause />
            </div>
            <VscDebugRestart />

        </ButtonsContainer>
    );
}

export default PlayPauseAndReset;