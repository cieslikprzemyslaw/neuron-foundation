import * as React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Header from '../components/neuronFoundationHome/Header';
import News from '../components/neuronFoundationHome/News';
import FoundationIdea from '../components/neuronFoundationHome/FoundationIdea';
import SocialMedia from '../components/neuronFoundationHome/SocialMedia';
import NewsSubscription from '../components/neuronFoundationHome/NewsSubscription';
import Acorn from '../components/neuronFoundationHome/Acorn';
import Support from '../components/neuronFoundationHome/Support';
import Patronite from '../components/staticComponents/Patronite';
import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';
import FoundationMenu from '../components/staticComponents/FoundationMenu';

const Wrapper = styled.section``;
// markup
const IndexPage = ({ data }) => {
    return (
        <Wrapper>
            <Nav />
            <FoundationMenu />
            <MobileNav />
            <Header />
            <News dataImage={data} />
            <SocialMedia />
            <FoundationIdea />
            <NewsSubscription />
            <Acorn />
            <Support />
            <Patronite />
            <Footer />
        </Wrapper>
    );
};

export const query = graphql`
    query {
        file(relativePath: { eq: "sampleNews.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;

export default IndexPage;
