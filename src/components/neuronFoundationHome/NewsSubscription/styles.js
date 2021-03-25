import styled from 'styled-components';

const Newsletter = styled.section`
    display: flex;
    flex-wrap: wrap;

    padding: 65px 5vw;
    width: 100%;

    background-color: #f5f5f5;

    @media (min-width: 800px) {
        justify-content: space-around;
        align-items: center;
    }
`;

const NewsletterSubSection = styled.section`
    width: 100%;

    @media (min-width: 800px) {
        width: 45%;
    }

    &:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    & > a {
        margin: 0 auto;
    }
`;

const NewsletterText = styled.h3``;

const NewsletterInput = styled.input`
    width: 100%;
    margin: 30px 0px;
    height: 50px;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    @media (min-width: 1024px) {
        width: 45%;
    }
`;

export { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput };