import React from 'react';

import { Header, DateParagraph } from '../neuronFoundationHome/News/styles';
import Description from './Description';
import ShareIcon from './ShareIcon';
import { LinkBack, LinkNext, ArticleContainer, ContentWrapper, Image } from './styles';

const ArticleHeader = Header('div');
const ArticleDateParagraph = DateParagraph('p');

const index = ({ dataImage }) => {
    return (
        <>
            <Image
                objectFit="cover"
                objectPosition="50% 50%"
                fluid={dataImage.file.childImageSharp.fluid}
            />
            <ArticleContainer>
                <LinkBack to="/pl">{' < '} Aktualności</LinkBack>
                <ArticleHeader>Prasówka pozytywnych wiadomośc</ArticleHeader>
                <ArticleDateParagraph>01.01.2020</ArticleDateParagraph>
                <ContentWrapper>
                    <Description />
                </ContentWrapper>
                <ShareIcon />
                <div className="flex">
                    <LinkNext to="/pl">{' <   '}Poprzedni</LinkNext>
                    <LinkNext to="/pl">Następny {'   > '}</LinkNext>
                </div>
            </ArticleContainer>
        </>
    );
};

export default index;
