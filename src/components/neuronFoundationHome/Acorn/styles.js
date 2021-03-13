import styled from 'styled-components';
import smartOak from '../../../assests/images/logo-SmartOak.png';
import acorn from '../../../assests/images/logo-Acorn.png';
import acornBg from '../../../assests/images/Acorn-bgImage.png';

const Wrapper = styled.section`
    background: url(${acornBg}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
`;

const Overlay = styled.section`
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    padding: 65px 5vw;
`;

const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

const TitleLogo1 = styled.img.attrs({
    src: `${smartOak}`
})`
    @media(min-width: 800px){
        display: none;
    }
`;

const TitleLogo2 = styled.img.attrs({
    src: `${acorn}`,
})`
    display: none;

    @media (min-width: 800px) {
        display: block;
    }
`;

const Text = styled.p`
    color: #fff;
    text-align: right;
    max-width: 40%;
`;

export { Wrapper, Overlay, TextSection, TitleLogo1, TitleLogo2, Text };
