import styled from 'styled-components';

import { respondTo } from '../../common/respondTo';

const SocialMediaSection = styled.section`
    padding: 65px 5vw;
    background-color: #f5f5f5;

    ${respondTo.md`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`;

const Title = styled.h3``;

const SocialMediaWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;

    ${respondTo.md`
        max-width: 50%;
        margin: 0;
    `}
`;

const ExternalLink = styled.a`
    width: 45%;
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    transition: all 0.15s ease;

    ${respondTo.md`
        margin: 20px 15px;
        width: 40%;
    `}
`;

const ExternalText = styled.p`
    padding-left: 50px;
    text-decoration: none;
    color: #0E0E0E;
`;

export { SocialMediaSection, Title, SocialMediaWrapper, ExternalLink, ExternalText };
