import React, { useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .8rem;

    h4 {
        color: #8B0F32 ;
    }

    span {
        color: #8B0F32;
    }

    @media (min-width: 600px) {
        
        font-size: 1rem;
        
      }
    
      
`;

const Footer =  () => {
    return (
        <FooterContainer>
            <h4>Designed and Coded by</h4>
            <span>Agustin Dorta</span>
        </FooterContainer>
    )
}

export default  Footer;