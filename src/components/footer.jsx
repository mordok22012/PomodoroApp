import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;

    h4 {
        color: #8B0F32 ;
    }

    span {
        color: #8B0F32;
        padding-bottom: 1rem
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