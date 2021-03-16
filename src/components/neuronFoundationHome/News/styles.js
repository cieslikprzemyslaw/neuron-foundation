import styled from 'styled-components';
import Img from 'gatsby-image';

export const NewsStyles = styled.div`
    margin: 0.8rem 1.6rem;
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
    margin: 1.6rem 0;
    border-radius: 8px;
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
