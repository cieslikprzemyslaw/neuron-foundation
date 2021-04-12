import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const Image = styled(Img)`
    margin-bottom: 1.8rem;
    max-height: 480px;
`;
export const LinkBack = styled(Link)`
    text-decoration: none;
    color: #b1b1b1;
    letter-spacing: 0.02em;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    word-spacing: 0.6em;
`;

export const LinkNext = styled(Link)`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    word-spacing: 0.6em;
    color: #575757;
    text-decoration: none;
`;

export const ArticleContainer = styled.div`
    margin: 1.6rem 5vw 1.6rem 5vw;
    .flex {
        margin: 3.2rem 2.4rem;
        display: flex;
        justify-content: space-between;
    }
`;

export const ContentWrapper = styled.div`
    min-height: 50vh;
    margin-top: 3.2rem;
    margin-bottom: 46px;
`;

export const Header = styled.h2`
    line-height: 33px;
    font-weight: normal;
    margin-bottom: 64px;
`;

export const Paragraph = styled.p`
    line-height: 150%;
    font-size: 14px;
`;
