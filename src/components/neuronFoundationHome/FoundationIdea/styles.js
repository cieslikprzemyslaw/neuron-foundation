import styled from 'styled-components';

const TextWrapper = styled.section`
    display: flex;

    margin: 10vh 5vw;
    text-align: justify;

    @media (min-width: 800px) {
        text-align: left;
    }
`;

const Column = styled.section`
    @media (min-width: 800px) {
        width: 49%;
        margin: 0 2.5vw 0 0;
    }
`;

const SecondColumn = styled.section`
    display: none;

    @media (min-width: 800px){
        margin: 0 5vw 0 2.5vw;
        display: block;
        width: 49%;
    }
`;

const Title = styled.h2`
    margin: 0 0 5vh 0;
`;

const Text = styled.p``;

export { TextWrapper, Column, SecondColumn, Title, Text };
