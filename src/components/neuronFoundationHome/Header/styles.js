import styled from 'styled-components';
import image from '../../../assests/images/Header.png'

const Header = styled.section`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    width: 100%;
`;

const TextWrapper = styled.section``;

const Title = styled.h3``;

const Text = styled.p``;

export { Header, TextWrapper, Title, Text };
