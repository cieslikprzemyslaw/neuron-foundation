import styled from 'styled-components';
import Img from 'gatsby-image';
import { breakpoints } from '../../common/breakpoints';

export const NewsStyles = styled.div`
    margin: 10vh 5vw;
    @media (max-width: ${breakpoints.md}) {
        margin: 10vh 5vw;
    }
`;
export const FlexContainer = styled.div`
    & > div:nth-child(even) {
        flex-direction: row-reverse;
        text-align: right;
        a {
            margin-left: auto;
        }
    }
`;

export const News = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 76px;
    @media (max-width: ${breakpoints.md}) {
        display: initial;
    }
`;

export const LinksContainer = styled.div`
    margin-top: -30px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: ${breakpoints.md}) {
        margin-top: 0px;
    }
`;

export const HeaderStyles = styled.div`
    margin-top: 9.2rem;
    margin-bottom: 4.8rem;

    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.02em;
`;

export const Image = styled(Img)`
    border-radius: 8px;
    min-width: 272px;
    height: 272px;
    @media (max-width: ${breakpoints.md}) {
        margin: 1.6rem 0;
        height: auto;
    }
`;

export const Header = (Link) => styled(Link)`
    display: block;
    font-weight: 600;
    font-size: 21px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    text-decoration: none;
    color: black;
`;

export const Paragraph = (Link) => styled(Link)`
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    margin-bottom: 0.8rem;
    text-decoration: none;
    color: black;
`;

export const DateParagraph = (Link) => styled(Link)`
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
`;
