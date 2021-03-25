import styled from 'styled-components';
import image from '../../../assests/images/Header.png'

const Overlapping = styled.section`
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
`;

const Header = styled.section`
    background: url(${image}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
`;

const TextWrapper = styled.section`
    position: absolute;
    bottom: 5%;
    margin: 0 5vw;
    color: white;
    text-align: justify;

    @media(min-width: 800px){
        top: 60%;
        left: 5%;
        transform: translate(-0%, -50%);
        max-width: 40%;
    }

    @media(min-width: 1440px){
        max-width: 30%;
    }
`;

const Title = styled.h3`
    text-decoration: underline;
    margin-bottom: 5vh;
`;

const Text = styled.p``;

export { Header, TextWrapper, Title, Text, Overlapping };
