import React from 'react';
import { Image, Header, Paragraph, DateParagraph, News, LinksContainer } from './styles';
import { Link } from 'gatsby';

const LinkHeader = Header(Link);
const LinkParagraph = Paragraph(Link);
const LinkDateParagraph = DateParagraph(Link);

const SingleNews = ({ image }) => {
    return (
        <News>
            <Link to="/article">
                <Image fluid={image.childImageSharp.fluid} />
            </Link>
            <LinksContainer>
                <LinkHeader to="/article">Prasówka pozytywnych wiadomości</LinkHeader>
                <LinkParagraph to="/article">
                    W każdy poniedziałek na naszym Facebooku zamieszczamy prasówkę z pozytywnymi
                    wiadomościami. Oglądanie telewizji czy scrollowanie portali internetowych może
                    być deprymujące. Przykre wiadomości docierają do nas z każdej strony. (...)
                </LinkParagraph>
                <LinkDateParagraph to="/article">01.01.2020</LinkDateParagraph>
            </LinksContainer>
        </News>
    );
};

export default SingleNews;
