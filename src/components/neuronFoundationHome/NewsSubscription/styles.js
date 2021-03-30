import styled from 'styled-components';

import { respondTo } from '../../common/respondTo';

const Newsletter = styled.section`
    display: flex;
    flex-wrap: wrap;

    padding: 65px 5vw;
    width: 100%;

    background-color: #f5f5f5;

    ${respondTo.md`
        justify-content: space-around;
        align-items: center;
    `}
`;

const NewsletterSubSection = styled.section`
    width: 100%;

    ${respondTo.md`
        width: 45%;
    `}

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
    margin: 15px 0px;
    height: 50px;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    ${respondTo.lg`
        width: 45%;
    `}
`;

const PassedText = styled.p`
    width: 100%;
    margin: 15px 0 0 30px;
    color: #2ee00b;
`;

const ErrorText = styled.p`
    width: 100%;
    margin: 15px 0 0 30px;
    color: #f2545b;
`;

export { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput, PassedText, ErrorText };