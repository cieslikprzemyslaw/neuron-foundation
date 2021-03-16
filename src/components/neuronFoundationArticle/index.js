import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Header, DateParagraph } from '../neuronFoundationHome/News/styles';
import ShareIcon from './ShareIcon';

const Image = styled(Img)`
    margin-bottom: 1.8rem;
`;
const LinkBack = styled(Link)`
    text-decoration: none;
    color: #b1b1b1;
    letter-spacing: 0.02em;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    word-spacing: 0.6em;
`;

const LinkNext = styled(Link)`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    word-spacing: 0.6em;
    color: #575757;
    text-decoration: none;
`;

const ArticleContainer = styled.div`
    margin: 1.6rem 1.6rem 1.6rem 1.6rem;
    .flex {
        margin: 3.2rem 2.4rem;
        display: flex;
        justify-content: space-between;
    }
`;

const Content = styled.div`
    min-height: 50vh;
    border: solid lightcoral;
    margin-top: 3.2rem;
`;

const ArticleHeader = Header('div');
const ArticleDateParagraph = DateParagraph('p');

const index = ({ dataImage }) => {
    return (
        <div>
            <Image fluid={dataImage.file.childImageSharp.fluid} />
            <ArticleContainer>
                <LinkBack to="/pl">{' < '} Aktualności</LinkBack>
                <ArticleHeader>Prasówka pozytywnych wiadomośc</ArticleHeader>
                <ArticleDateParagraph>01.01.2020</ArticleDateParagraph>
                <Content>lorem ipsum</Content>
                <div className="flex">
                    <ShareIcon />
                    <LinkNext to="/pl">Następny {'   > '}</LinkNext>
                </div>
            </ArticleContainer>
        </div>
    );
};

export default index;
